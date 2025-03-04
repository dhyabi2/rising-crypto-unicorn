
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';

// Sample data for the chart
const dailyData = [
  { date: 'Jan 1', value: 1000 },
  { date: 'Jan 5', value: 1200 },
  { date: 'Jan 10', value: 1100 },
  { date: 'Jan 15', value: 1300 },
  { date: 'Jan 20', value: 1500 },
  { date: 'Jan 25', value: 1400 },
  { date: 'Jan 30', value: 1700 },
];

const weeklyData = [
  { date: 'Week 1', value: 1000 },
  { date: 'Week 2', value: 1300 },
  { date: 'Week 3', value: 1600 },
  { date: 'Week 4', value: 2000 },
  { date: 'Week 5', value: 2400 },
  { date: 'Week 6', value: 2800 },
  { date: 'Week 7', value: 3500 },
];

const monthlyData = [
  { date: 'Jan', value: 1000 },
  { date: 'Feb', value: 1800 },
  { date: 'Mar', value: 2500 },
  { date: 'Apr', value: 3000 },
  { date: 'May', value: 3800 },
  { date: 'Jun', value: 4500 },
  { date: 'Jul', value: 5700 },
  { date: 'Aug', value: 7000 },
];

const yearlyData = [
  { date: '2020', value: 1000 },
  { date: '2021', value: 3000 },
  { date: '2022', value: 7000 },
  { date: '2023', value: 15000 },
  { date: '2024', value: 25000 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-medium text-crypto-blue">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const GrowthChart = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  
  const getChartData = () => {
    switch (timeRange) {
      case 'daily':
        return dailyData;
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
      case 'yearly':
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  return (
    <section id="growth" className="py-20 relative bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-sm font-medium text-crypto-charcoal">Consistent Growth</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-4">
            Outperforming Major Currencies
          </h2>
          <p className="text-lg text-crypto-charcoal/70 max-w-2xl mx-auto">
            Even without celebrity endorsements, this cryptocurrency has shown remarkable growth compared to major currencies in the market.
          </p>
          <p className="dir-rtl mt-4 text-lg text-crypto-charcoal/80 font-arabic">
            على الرغم من ان ترمب لم يتكلم عنها لكنها تفوقت بالارتفاع
          </p>
        </div>
        
        {/* Time range selector */}
        <div className="flex justify-center space-x-2 mb-8 animate-fade-in">
          <Button
            variant={timeRange === 'daily' ? 'default' : 'outline'} 
            onClick={() => setTimeRange('daily')}
            className={`rounded-full ${timeRange === 'daily' ? 'bg-crypto-blue' : 'border-crypto-blue text-crypto-blue hover:bg-crypto-blue/5'}`}
          >
            Daily
          </Button>
          <Button
            variant={timeRange === 'weekly' ? 'default' : 'outline'} 
            onClick={() => setTimeRange('weekly')}
            className={`rounded-full ${timeRange === 'weekly' ? 'bg-crypto-blue' : 'border-crypto-blue text-crypto-blue hover:bg-crypto-blue/5'}`}
          >
            Weekly
          </Button>
          <Button
            variant={timeRange === 'monthly' ? 'default' : 'outline'} 
            onClick={() => setTimeRange('monthly')}
            className={`rounded-full ${timeRange === 'monthly' ? 'bg-crypto-blue' : 'border-crypto-blue text-crypto-blue hover:bg-crypto-blue/5'}`}
          >
            Monthly
          </Button>
          <Button
            variant={timeRange === 'yearly' ? 'default' : 'outline'} 
            onClick={() => setTimeRange('yearly')}
            className={`rounded-full ${timeRange === 'yearly' ? 'bg-crypto-blue' : 'border-crypto-blue text-crypto-blue hover:bg-crypto-blue/5'}`}
          >
            Yearly
          </Button>
        </div>
        
        {/* Chart container */}
        <div className="glass-card rounded-2xl p-4 md:p-6 lg:p-8 h-80 md:h-96 shadow-xl animate-scale-up">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={getChartData()}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#33C3F0" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#33C3F0" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#222222' }} 
                axisLine={{ stroke: '#f0f0f0' }}
              />
              <YAxis 
                tick={{ fill: '#222222' }} 
                axisLine={{ stroke: '#f0f0f0' }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#33C3F0" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorValue)" 
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Comparison stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass-card rounded-xl p-6 text-center transition-all hover:shadow-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg font-medium text-crypto-charcoal/70 mb-2">vs Bitcoin</h3>
            <p className="text-3xl font-bold text-green-500">+37%</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center transition-all hover:shadow-xl animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-medium text-crypto-charcoal/70 mb-2">vs Ethereum</h3>
            <p className="text-3xl font-bold text-green-500">+52%</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center transition-all hover:shadow-xl animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-lg font-medium text-crypto-charcoal/70 mb-2">Market Rank</h3>
            <p className="text-3xl font-bold text-crypto-blue">Top 10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthChart;
