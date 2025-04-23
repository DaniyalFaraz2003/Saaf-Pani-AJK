const WaterSource = require('../models/waterSource.model');
const City = require('../models/city.model');
const Report = require('../models/report.model');

const getDashboardStats = async (req, res) => {
  try {
    // 1. Total number of locations
    const totalLocations = await City.aggregate([
      { $unwind: "$locations" },
      { $count: "total" }
    ]);

    // 2. Total number of water sources
    const totalSources = await WaterSource.countDocuments();

    // 3. Total number of safe sources
    const totalSafeSources = await WaterSource.countDocuments({ isSafeForDrinking: true });

    // 4. Number of safe sources per city
    const safeSourcesByCity = await WaterSource.aggregate([
      { $match: { isSafeForDrinking: true } },
      { $group: { _id: "$city", count: { $sum: 1 } } },
      { $project: { city: "$_id", count: 1, _id: 0 } },
      { $sort: { count: -1 } }
    ]);

    // 5. Top 5 recently added sources
    const recentSources = await WaterSource.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('city location sourceType isSafeForDrinking createdAt');

    // 6. PH comparison data for cities (for bar graph)
    const phComparisonData = await WaterSource.aggregate([
      {
        $group: {
          _id: "$city",
          avgPH: { $avg: "$phValue" },
          minPH: { $min: "$phValue" },
          maxPH: { $max: "$phValue" },
          count: { $sum: 1 }
        }
      },
      { 
        $project: {
          city: "$_id",
          avgPH: { $round: ["$avgPH", 2] },
          minPH: 1,
          maxPH: 1,
          count: 1,
          _id: 0
        }
      },
      { $sort: { avgPH: -1 } }
    ]);

    // 7. Additional stats (optional)
    const totalReports = await Report.countDocuments();
    const pendingReports = await Report.countDocuments({ status: 'pending' });

    res.json({
      success: true,
      data: {
        totals: {
          locations: totalLocations[0]?.total || 0,
          sources: totalSources,
          safeSources: totalSafeSources,
          reports: totalReports,
          pendingReports: pendingReports
        },
        safeSourcesByCity,
        recentSources,
        phComparisonData,
        lastUpdated: new Date()
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getDashboardStats
};