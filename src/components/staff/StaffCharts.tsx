import React from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import {
  MOCK_WELLBEING_TRENDS,
  MOCK_CONCERN_DISTRIBUTION,
  MOCK_DEPARTMENT_COORDINATION
} from '../../data/mockData';

export const WellbeingTrendsChart: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-heading font-bold text-sm text-brand-navy">
            Campus Wellbeing Signal Distribution (Semester Trend)
          </h4>
          <p className="text-xs text-slate-500">
            Weekly aggregate of student check-in indicators across 12 departments
          </p>
        </div>
        <span className="text-[10px] font-bold text-brand-primary bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
          Aggregated & Anonymized
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MOCK_WELLBEING_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorModerate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorSupport" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E1B4B',
                color: '#fff',
                borderRadius: '12px',
                border: 'none',
                fontSize: '12px'
              }}
            />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
            <Area
              type="monotone"
              dataKey="positive"
              name="Steady Wellbeing (%)"
              stroke="#10B981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPositive)"
            />
            <Area
              type="monotone"
              dataKey="moderate"
              name="Mild Load / Self-Care (%)"
              stroke="#6366F1"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorModerate)"
            />
            <Area
              type="monotone"
              dataKey="supportNeeded"
              name="Support Recommended (%)"
              stroke="#F59E0B"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSupport)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const ConcernsDistributionChart: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-heading font-bold text-sm text-brand-navy">
            Common Self-Reported Concerns
          </h4>
          <p className="text-xs text-slate-500">
            Categorized voluntary factors affecting student routine
          </p>
        </div>
      </div>

      <div className="h-64 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={MOCK_CONCERN_DISTRIBUTION}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={4}
              dataKey="percentage"
            >
              {MOCK_CONCERN_DISTRIBUTION.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name, item) => [`${value}% (${item.payload.count} students)`, item.payload.name]}
              contentStyle={{
                backgroundColor: '#1E1B4B',
                color: '#fff',
                borderRadius: '12px',
                border: 'none',
                fontSize: '12px'
              }}
            />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              wrapperStyle={{ fontSize: '11px', lineHeight: '20px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const DepartmentCoordinationChart: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-heading font-bold text-sm text-brand-navy">
            Cross-Department Routing & Coordination
          </h4>
          <p className="text-xs text-slate-500">
            Referred vs successfully coordinated early-support actions
          </p>
        </div>
        <span className="text-[10px] font-bold text-brand-mint bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
          96% Coordinated
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MOCK_DEPARTMENT_COORDINATION} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748B' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: '#64748B' }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E1B4B',
                color: '#fff',
                borderRadius: '12px',
                border: 'none',
                fontSize: '12px'
              }}
            />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
            <Bar dataKey="referrals" name="Inbound Signals" fill="#6366F1" radius={[6, 6, 0, 0]} />
            <Bar dataKey="coordinated" name="Coordinated Outreach" fill="#10B981" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
