
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';

// Nano (XNO) historical price data (representative values)
const dailyData = [
  { date: 'Apr 1', value: 0.80 },
  { date: 'Apr 5', value: 0.85 },
  { date: 'Apr 10', value: 0.82 },
  { date: 'Apr 15', value: 0.90 },
  { date: 'Apr 20', value: 0.95 },
  { date: 'Apr 25', value: 0.93 },
  { date: 'Apr 30', value: 1.05 },
];

const weeklyData = [
  { date: 'Week 1', value: 0.80 },
  { date: 'Week 2', value: 0.88 },
  { date: 'Week 3', value: 0.92 },
  { date: 'Week 4', value: 0.97 },
  { date: 'Week 5', value: 1.05 },
  { date: 'Week 6', value: 1.10 },
  { date: 'Week 7', value: 1.18 },
];

const monthlyData = [
  { date: 'Jan', value: 0.75 },
  { date: 'Feb', value: 0.82 },
  { date: 'Mar', value: 0.90 },
  { date: 'Apr', value: 1.05 },
  { date: 'May', value: 1.15 },
  { date: 'Jun', value: 1.10 },
  { date: 'Jul', value: 1.20 },
  { date: 'Aug', value: 1.18 },
];

const yearlyData = [
  { date: '2019', value: 0.70 },
  { date: '2020', value: 0.55 },
  { date: '2021', value: 5.60 }, // Historical peak
  { date: '2022', value: 0.85 },
  { date: '2023', value: 1.10 },
  { date: '2024', value: 1.20 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-medium text-crypto-blue">
          ${payload[0].value.toFixed(2)}
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
            <span className="text-sm font-medium text-crypto-charcoal">Sustainable Growth</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-crypto-charcoal mb-4">
            Nano: Eco-Friendly Performance
          </h2>
          <p className="text-lg text-crypto-charcoal/70 max-w-2xl mx-auto">
            While many cryptocurrencies rely on energy-intensive mining and celebrity endorsements, Nano delivers real-world utility with minimal environmental impact.
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
                tickFormatter={(value) => `$${value.toFixed(2)}`}
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
            <h3 className="text-lg font-medium text-crypto-charcoal/70 mb-2">Energy vs Bitcoin</h3>
            <p className="text-3xl font-bold text-green-500">-99.9%</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center transition-all hover:shadow-xl animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-medium text-crypto-charcoal/70 mb-2">Transaction Speed</h3>
            <p className="text-3xl font-bold text-green-500">&lt; 1 sec</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center transition-all hover:shadow-xl animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-lg font-medium text-crypto-charcoal/70 mb-2">Transaction Fees</h3>
            <p className="text-3xl font-bold text-crypto-blue">$0.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthChart;
