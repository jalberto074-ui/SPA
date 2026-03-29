export const skillData = {
    "Advanced Data & Tracking Analysis": {
        description: "Specialist in sanitizing data ecosystems and optimizing conversion through forensic tracking.",
        impact: [
            { label: "Revenue ID", value: "$2.57M" },
            { label: "Data Quality", value: "99.9%" }
        ],
        bullets: [
            "Deep Google Tag Manager audit for a Wellness Center (USA), eliminating duplicate firing.",
            "Complete reconstruction of conversion funnels in GA4 for real ROAS visibility.",
            "Identification of data pipeline anomalies that caused significant revenue under-reporting.",
            "Technical documentation of tracking architecture for multi-city scalability."
        ],
        images: [
            { url: "assets/portfolio/ga4-dashboard-metrics.png", caption: "GA4: Monitoring sanitized conversion events (Forms and CTM)." }
        ]
    },
    "SQL Architecture & Data Management": {
        description: "Design and optimization of relational data infrastructures for massive transaction analysis.",
        impact: [
            { label: "Transactions", value: "952K+" },
            { label: "Query Speed", value: "300%" }
        ],
        bullets: [
            "Star Schema modeling (Fact/Dimension) to facilitate complex BI reporting.",
            "SQL query optimization in AWS Aurora for processing 5-year historical datasets.",
            "Sanitization of logic in financial revenue extraction queries.",
            "Database administration for platforms with more than 25 active clients."
        ]
    },
    "Tracking Strategy & Automation Pipelines": {
        description: "Orchestration of systems connecting marketing, sales, and operations in real-time.",
        impact: [
            { label: "Report Cycle", value: "30→1 Day" },
            { label: "KPI Alerts", value: "Real-time" }
        ],
        bullets: [
            "Integration of CallTrackingMetrics (CTM) with Slack and GA4 via n8n webhooks.",
            "Google Ads automation (via OAuth2) for budget anomaly detection and alerts.",
            "Development of technical SOPs for mass deployment of GTM containers.",
            "Syncing CRM -> Sheets -> Dashboards without manual intervention."
        ],
        images: [
            { url: "assets/portfolio/n8n-alert-flow.png", caption: "n8n Workflow: Automation of smart KPI alerts for Google Ads." },
            { url: "assets/portfolio/n8n-ctm-integration.png", caption: "n8n Workflow: LIVE integration of Call Tracking with the Slack ecosystem." }
        ]
    },
    "Infrastructure & DevOps Support": {
        description: "Ensuring high availability and security in cloud automation environments.",
        bullets: [
            "Administration of self-hosted n8n servers with automated backup management.",
            "Implementation of security protocols for managing API keys and OAuth2.",
            "Resolution of infrastructure conflicts in complex REST API integrations.",
            "Proactive monitoring of stability in cloud-based tracking services."
        ]
    },
    "Visualization & Business Intelligence": {
        description: "Merging artificial intelligence and data visualization for cost optimization.",
        impact: [
            { label: "Software Savings", value: "$500/mo" },
            { label: "Lead Processing", value: "24/7" }
        ],
        bullets: [
            "Development of an AI Chat Widget (Custom JS/n8n) for lead qualification without human intervention.",
            "Replacement of expensive tools (TalkFurther) with proprietary solutions integrated via GTM.",
            "Creation of interactive data storytelling focused on customer retention metrics.",
            "Corporate Dashboards in Looker Studio with channel-specific ROAS visualization."
        ],
        images: [
            { url: "assets/portfolio/chat-widget-1.png", caption: "AI Virtual Assistant: User interface implemented directly on the client's site." },
            { url: "assets/portfolio/chat-widget-2.png", caption: "Lead Qualification: Conversation flow capturing valuable data before reaching the CRM." },
            { url: "assets/portfolio/chat-widget-3.png", caption: "Backend Logic: Chat integration with n8n for immediate prospect injection." }
        ]
    }
};
