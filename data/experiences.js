export const experiences = [
    {
        id: 'pluto-sde-ml',
        title: 'Software Development Engineer in Machine Learning',
        company: 'Pluto Money',
        location: 'Bengaluru, Karnataka, India',
        duration: 'Jun 2024 - May 2025',
        employmentType: 'Full-time',
        shortDescription: 'Led ML and backend development of Pluto’s chatbot ecosystem and data services.',
        fullDescription: `At Pluto Money, I played a key role in revamping and scaling core systems—especially the chatbot and data pipelines. My contributions spanned microservices architecture, automation using Celery, and performance improvements across backend and frontend.`,
        responsibilities: [
            'Revamped the flagship chatbot using “Generative UI” components for interactive input/output widgets',
            'Designed and deployed a Redis + LavinMQ-based “Stock Worker” for real-time stock aggregation',
            'Developed a Celery Worker to automate background pipelines, reducing manual work by ~90%',
            'Collaborated with SEO and product teams to rearchitect critical high-traffic sections (stocks, mutual funds)',
            'Improved CI/CD workflows using GitHub Actions with automated environment setup and linting',
            'Wrote extensive technical documentation to support onboarding and cross-functional collaboration'
        ],
        achievements: [
            'Reduced latency of real-time financial data pipelines significantly across web and chatbot',
            'Accelerated release cycles by 40% with optimized CI/CD and testing',
            'Enhanced team onboarding speed through robust documentation practices'
        ],
        skills: [
            'Python', 'FastAPI', 'Celery', 'Redis', 'LavinMQ', 'GitHub Actions',
            'Next.js', 'CI/CD', 'Microservices', 'SEO Optimization', 'Technical Writing'
        ],
        featured: true,
        companyLogo: 'https://media.licdn.com/dms/image/v2/D560BAQF6x8lIz0cpvg/company-logo_100_100/company-logo_100_100/0/1721138721375/plutomoney_logo?e=1755734400&v=beta&t=CaeCWWQ7bJ8Xd8OmL7XihGOQcOSLax2UV0uMXnmvwag',
        companyUrl: 'https://plutomoney.in'
    },
    {
        id: 'pluto-ai-ml-intern',
        title: 'AI/ML Intern',
        company: 'Pluto Money',
        location: 'Hybrid',
        duration: 'Apr 2024 - Jun 2024',
        employmentType: 'Internship',
        shortDescription: 'Developed a Gen-AI financial chatbot with RAG, function calling, and speech streaming.',
        fullDescription: `As an AI/ML Intern at Pluto Money, I led the development of an intelligent financial assistant chatbot that offers users personalized planning features like portfolio diversification and stock analysis. I used state-of-the-art tools and frameworks to integrate real-time streaming, function calling, and dynamic knowledge retrieval.`,
        responsibilities: [
            'Built a Gen-AI chatbot capable of performing portfolio analysis, retirement planning, and stock Q&A',
            'Integrated agentic RAG with function calling and prompt engineering to enable dynamic tool usage',
            'Implemented fallback to online web search when internal knowledge base couldn’t resolve user queries',
            'Developed speech-to-speech interaction using Deepgram + ElevenLabs with 2s response latency',
            'Designed front-end with server-side rendering (SSR) and SEO-friendly structure including sitemap'
        ],
        achievements: [
            'Reduced average query resolution time by 100% with optimized toolchains',
            'Delivered hands-free real-time chatbot with 2-second end-to-end latency',
            'Successfully deployed an AI-first feature used by hundreds of test users during beta phase'
        ],
        skills: [
            'FastAPI', 'Python', 'Next.js', 'MongoDB Atlas', 'LangChain',
            'OpenAI', 'Deepgram', 'ElevenLabs', 'LLM Function Calling',
            'Agentic RAG', 'WebSockets', 'SEO'
        ],
        featured: true,
        companyLogo: 'https://media.licdn.com/dms/image/v2/D560BAQF6x8lIz0cpvg/company-logo_100_100/company-logo_100_100/0/1721138721375/plutomoney_logo?e=1755734400&v=beta&t=CaeCWWQ7bJ8Xd8OmL7XihGOQcOSLax2UV0uMXnmvwag',
        companyUrl: 'https://plutomoney.in'
    },
];

// Group experiences by company
export const experiencesByCompany = experiences.reduce((acc, experience) => {
    const company = experience.company;
    if (!acc[company]) {
        acc[company] = {
            company: company,
            companyLogo: experience.companyLogo,
            companyUrl: experience.companyUrl,
            experiences: []
        };
    }
    acc[company].experiences.push(experience);
    return acc;
}, {});

// Sort experiences within each company by start date (most recent first)
Object.values(experiencesByCompany).forEach(companyGroup => {
    companyGroup.experiences.sort((a, b) => {
        // Extract year from duration string for sorting
        const getStartYear = (duration) => {
            const match = duration.match(/(\w+)\s+(\d{4})/);
            return match ? parseInt(match[2]) : 0;
        };
        return getStartYear(b.duration) - getStartYear(a.duration);
    });
});