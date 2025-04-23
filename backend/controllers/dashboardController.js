const City = require('../models/city.model');
const WaterSource = require('../models/waterSource.model');
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
    // First get all sources grouped by city with pH values
    const sourcesByCity = await WaterSource.aggregate([
      {
        $group: {
          _id: "$city",
          sources: { $push: { phValue: "$phValue" } }, // Push objects instead of just values
          count: { $sum: 1 }
        }
      },
      { 
        $project: {
          city: "$_id", // Properly project the city name
          sources: 1,
          count: 1,
          _id: 0
        }
      }
    ]);

    // Calculate safe and unsafe counts based on pH (5-7 is safe)
    const phComparisonData = sourcesByCity.map(cityData => {
      const safeCount = cityData.sources.filter(
        source => source.phValue >= 5 && source.phValue <= 7
      ).length;
      
      const phValues = cityData.sources.map(s => s.phValue);
      const sumPH = phValues.reduce((a, b) => a + b, 0);
      
      return {
        city: cityData.city,
        count: cityData.count,
        safeCount,
        unsafeCount: cityData.count - safeCount,
        avgPH: parseFloat(sumPH / cityData.count).toFixed(2),
        minPH: Math.min(...phValues),
        maxPH: Math.max(...phValues)
      };
    }).sort((a, b) => b.avgPH - a.avgPH);

    // 7. Additional stats (optional)
    const totalReports = await Report.countDocuments();
    const pendingReports = await Report.countDocuments({ status: 'pending' });

    res.json({
      success: true,
      allData: {
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
    console.error("Error in getDashboardStats:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getDashboardStats
};