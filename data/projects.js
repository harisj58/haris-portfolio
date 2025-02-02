export const projects = [
    {
        id: 'farmer-vision',
        title: 'Farmer Vision',
        shortDescription: 'Helping farmers protect their crops!',
        fullDescription: `Farmer Vision is an Android application designed to help farmers tackle the issue of stray cattle damaging crops. The app uses a camera device that captures video footage of farmland, which is processed by a TensorFlow Lite model to detect stray animals. The real-time status of all cameras is updated and stored in a Firebase Realtime Database, allowing farmers to monitor the situation on a client device. This system helps farmers take prompt action by identifying and reporting the presence of stray cattle, minimizing crop damage and supporting their livelihoods.`,
        tags: ['AI', 'Machine Learning', 'Computer Vision', 'TFLite'],
        thumbnail: 'https://project-haris-eb407.firebaseapp.com/farmer-vision-logo.png',
        imageUrl: 'https://project-haris-eb407.firebaseapp.com/farmer-vision-mockup.png',
        githubUrl: 'https://github.com/harisj58/farmer-vision/',
        liveUrl: 'https://github.com/harisj58/farmer-vision/releases',
        featured: true,
        technologies: ['Kotlin', 'Java', 'Firebase', 'TensorFlow'],
        challenges: [
            'Finding platform for release',
            'Data acquisition',
            'Model accuracy during deployment'
        ],
        solutions: [
            'Android - due to its wide availability',
            'Built exhaustive data scraping scripts',
            'Repeated experimentation with various models'
        ],
        learnings: [
            'Deploying ML models on edge devices',
            'Handling realtime data',
            'End-to-end solution development'
        ],
        date: '2023-08'
    },
    {
        id: 'skimlit',
        title: 'SkimLit',
        shortDescription: 'Fly by research papers in speed!',
        fullDescription: `A lot of users face the problem of going through lengthy research papers just to get some little information that they are looking for. Even with abstracts summarizing the contents of the paper in a paragraph, it is hard to understand the context sometime. SkimLit takes in the abstract of any research paper and breaks it down into labelled segments. These labels can be any one of the following five - objectives, background, methods, results, and conclusions. With these labels preceding the sentence of the abstract, it becomes a breeze to read through the content which would otherwise take longer to extract from.`,
        tags: ['AI', 'Deep Learning', 'NLP', 'TensorFlow'],
        thumbnail: 'https://project-haris-eb407.firebaseapp.com/skimlit-logo.png',
        imageUrl: 'https://project-haris-eb407.firebaseapp.com/skimlit.png',
        githubUrl: 'https://github.com/harisj58/skimlit',
        liveUrl: 'https://huggingface.co/spaces/prosekutor/skimlit',
        featured: true,
        technologies: ['Python', 'TensorFlow', 'scikit-learn', 'pandas', 'NumPy', 'matplotlib'],
        // challenges: [
        //     'Costly training iterations',
        //     'Designing effective model',
        //     'Managing API costs effectively'
        // ],
        // solutions: [
        //     'Implemented prompt templates and validation',
        //     'Built custom image processing pipeline',
        //     'Created caching system for frequent requests'
        // ],
        learnings: [
            'Advanced NLP techniques',
            'Encoding processes - with Universal Sentence Encoder (USE) & GloVe Embeddings',
            'Multi-modality in neural networks'
        ],
        date: '2023-03'
    },
    {
        id: 'sentiment-analysis-tool',
        title: 'Sentiment Analysis Tool',
        shortDescription: 'Find out the sentiment behind your words!',
        fullDescription: `The application is intended to bring forth the sentiment carried by the user's words. The words are preprocessed, fed into a machine learning model which categorizes it into one of three categories: negative, neutral or positive. The analysis also provides the percentage confidence of the model regarding the classification in each of the three categories.`,
        tags: ['AI', 'Machine Learning', 'NLP'],
        thumbnail: 'https://project-haris-eb407.firebaseapp.com/wall-5.jpeg',
        imageUrl: 'https://project-haris-eb407.firebaseapp.com/sentiment-analysis.png',
        githubUrl: 'https://github.com/harisj58/sentiment-analysis',
        liveUrl: 'https://huggingface.co/spaces/prosekutor/sentiment-analysis',
        featured: true,
        technologies: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'matplotlib', 'NLTK'],
        // challenges: [
        //     'Optimizing prompt engineering for consistent results',
        //     'Handling large-scale image processing',
        //     'Managing API costs effectively'
        // ],
        // solutions: [
        //     'Implemented prompt templates and validation',
        //     'Built custom image processing pipeline',
        //     'Created caching system for frequent requests'
        // ],
        learnings: [
            'Natural language processing using machine learning',
            'Vectorization and its relevance',
            'In-depth data processing',
            'Exhaustive ML experimentations along with hyperparameter tuning'
        ],
        date: '2022-10'
    },
    {
        id: 'tinder-clone',
        title: 'Tinder Clone',
        shortDescription: 'Get swiping to find the one!',
        fullDescription: `This app is a Tinder-like dating platform that allows users to create profiles, swipe through other users' profiles, and connect with matches. After signing in via Google, users can easily swipe right to "like" or left to "pass" on profiles. When two users swipe right on each other's profiles, a match is made, and they can start chatting in real-time. The app also features a side drawer with options to navigate the home screen, update profiles, access the about section, or sign out. Powered by Firebase, it utilizes Firestore for user data storage and Firebase Authentication for secure sign-in.`,
        tags: ['Clone', 'Dating', 'Social Media', 'Cross Platform'],
        thumbnail: 'https://project-haris-eb407.firebaseapp.com/tinder-logo.png',
        imageUrl: 'https://project-haris-eb407.firebaseapp.com/Tinder%20Mockup.png',
        githubUrl: 'https://github.com/harisj58/tinder-clone/',
        liveUrl: 'https://drive.google.com/file/d/119mI69zDHHaI-2Gu6s-6F4Emk_vL-42Y/view',
        featured: true,
        technologies: ['React Native', 'Expo CLI', 'Tailwind CSS', 'Firebase'],
        // challenges: [
        //     'Optimizing prompt engineering for consistent results',
        //     'Handling large-scale image processing',
        //     'Managing API costs effectively'
        // ],
        // solutions: [
        //     'Implemented prompt templates and validation',
        //     'Built custom image processing pipeline',
        //     'Created caching system for frequent requests'
        // ],
        learnings: [
            'Cross platform development',
            'Android UI & UX designs',
            'Introduction to social media algorithms'
        ],
        date: '2022-10'
    },
    {
        id: 'linkedin-clone',
        title: 'LinkedIn Clone',
        shortDescription: 'The professional networking website - remade!',
        fullDescription: `This app is a LinkedIn clone designed for users to share updates and connect with others in a dynamic, user-generated feed. After logging in, users can post thoughts, updates, or any content by typing in the text field at the top of the feed and pressing enter, with posts instantly appearing at the top of the feed. The app also includes a logout option accessible by pressing the 'Me' button next to the notifications icon. It incorporates a proper authentication system to ensure secure user access and interactions.`,
        tags: ['Clone', 'Networking', 'Social Media', 'Website'],
        thumbnail: 'https://project-haris-eb407.firebaseapp.com/linkedin-logo.svg',
        imageUrl: 'https://user-images.githubusercontent.com/72334266/145679270-28b04692-2e4f-4572-a55a-48694c1e423a.png',
        githubUrl: 'https://github.com/harisj58/linkedin-clone',
        liveUrl: 'https://linkedin-clone-4fbba.web.app/',
        featured: false,
        technologies: ['React.JS', 'Redux', 'Firebase'],
        // challenges: [
        //     'Optimizing prompt engineering for consistent results',
        //     'Handling large-scale image processing',
        //     'Managing API costs effectively'
        // ],
        // solutions: [
        //     'Implemented prompt templates and validation',
        //     'Built custom image processing pipeline',
        //     'Created caching system for frequent requests'
        // ],
        learnings: [
            'Firebase - signin processes and database management',
            'State management with Redux',
            'UI building with React'
        ],
        date: '2023-10'
    },
    {
        id: 'movie-search',
        title: 'Movie Search',
        shortDescription: 'Find out the insights on your favorite flicks.',
        fullDescription: `The project's main use is to obtain relevant information about the movie, including its rating and poster, based on the title which is to be inputted by the user. All the user has to do is to enter the desired movie title and hit the 'Get Movie' button to fetch the intended results. By default, the application displays the details of The Suicide Squad (2021) by James Gunn.

        The project uses the OMDb API - The Open Movie Database (http://www.omdbapi.com), a RESTful API, to obtain the movie information based on the title entered by the user. The process of making this web application was highly simplified by the employment of ReactJS. The website is hosted at Netlify.`,
        tags: ['Entertainment', 'Movies', 'Glassmorphism', 'Basics'],
        thumbnail: 'https://project-haris-eb407.firebaseapp.com/clapperboard.png',
        imageUrl: 'https://user-images.githubusercontent.com/72334266/214634317-54b4f5d9-4414-46ee-9730-2c0cf9085aed.png',
        githubUrl: 'https://github.com/harisj58/movie-search',
        liveUrl: 'https://movie-search-harisj58.netlify.app/',
        featured: false,
        technologies: ['React.JS', 'OMDb API', 'Netlify'],
        // challenges: [
        //     'Optimizing prompt engineering for consistent results',
        //     'Handling large-scale image processing',
        //     'Managing API costs effectively'
        // ],
        // solutions: [
        //     'Implemented prompt templates and validation',
        //     'Built custom image processing pipeline',
        //     'Created caching system for frequent requests'
        // ],
        learnings: [
            'API integration with web projects',
            'Glassmorphism UI building',
            'Website deployment and projects hosting'
        ],
        date: '2023-02'
    },
    {
        id: 'ecommmerce-app',
        title: 'eCommerce App',
        shortDescription: 'The one stop shop for all your needs.',
        fullDescription: `This application demonstrates a sample eCommerce application with its major highlights being a full-fledged authentication system implemented with the aid of Firebase, a product gallery showcasing all available products, cart functionality and address saving for future use.

        The user is able to shop from multiple categories. Each product is assigned ratings in terms of how well made it is and its quality. This rating is in terms of stars with 5 being the highest. Each product is well described to assist the users in making better purchase decisions. Each product may be purchased in quantities up to 10.`,
        tags: ['Shopping', 'Online', 'Android'],
        thumbnail: 'https://project-haris-eb407.firebaseapp.com/Shopping-Cart-Icon-2.svg',
        imageUrl: 'https://project-haris-eb407.firebaseapp.com/eCommerce%20App%20Mockup.png',
        githubUrl: 'https://github.com/harisj58/ecommerce-app',
        liveUrl: 'https://drive.google.com/file/d/1iNv1Gl0HQohkSEZe5YmIh9MoiVzPhayE/view',
        featured: false,
        technologies: ['React.JS', 'OMDb API', 'Netlify'],
        // challenges: [
        //     'Optimizing prompt engineering for consistent results',
        //     'Handling large-scale image processing',
        //     'Managing API costs effectively'
        // ],
        // solutions: [
        //     'Implemented prompt templates and validation',
        //     'Built custom image processing pipeline',
        //     'Created caching system for frequent requests'
        // ],
        learnings: [
            'Introduction to proper software development - on Android platform',
            'Database interactions for various tasks',
            'Complete end-to-end product development'
        ],
        date: '2021-12'
    },
];