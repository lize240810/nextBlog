import React from 'react';

const FeaturesList = () => {
  const features = [
    {
      title: "Autonomous AI Agents",
      description: "AI employees that handle finance operations 24/7 without human intervention",
      icon: "🤖"
    },
    {
      title: "End-to-End Automation",
      description: "From bookkeeping to financial reporting, we automate it all",
      icon: "⚡"
    },
    {
      title: "Real-Time Insights",
      description: "Get actionable financial data when you need it",
      icon: "📊"
    },
    {
      title: "Error-Free Processing",
      description: "Zero human error in your financial operations",
      icon: "✅"
    },
    {
      title: "Multi-Entity Support",
      description: "Manage finances across all your business entities in one place",
      icon: "🏢"
    },
    {
      title: "Audit-Ready",
      description: "Automatically generated documentation for compliance",
      icon: "🔍"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          The All-In-One Corporate Finance Platform
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Built for growth-focused businesses that value efficiency and accuracy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;