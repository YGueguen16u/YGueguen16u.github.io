const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À Propos",
            projects: "Projets",
            skills: "Compétences",
            experience: "Expériences & Études",
            contact: "Contact",
            resumeFr: "CV FR",
            resumeEn: "Resume EN"
        },
        home: {
            greeting: "Bonjour !",
            name: "Yann GUEGUEN",
            title: "Data Engineer",
            bio: "Data Engineer avec un fort intérêt pour l'IA, le Cloud Computing et le DevOps."
        },
        about: {
            title: "À Propos",
            content: "Après mon diplôme d'ingénieur et une expérience d'un an chez EDF en tant qu'ingénieur d'études sur les programmes de maintenance, j'ai ensuite complété une formation spécialisée en Data Engineering et Data Science en alternance chez Thales Alenia Space.\n\nCette expérience m'a permis de maîtriser l'automatisation des processus et le développement de pipelines ETL dans un contexte industriel exigeant.\n\nÀ travers mes projets personnels et académiques, j'ai élargi mes compétences vers le Cloud Computing et les pratiques DevOps, me permettant de concevoir des solutions data complètes et scalables.\n\nJe m'appuie sur les technologies cloud pour optimiser les ressources (stockage, VM, conteneurs) et sur les méthodologies DevOps (CI/CD, tests automatisés, déploiement continu) pour garantir une meilleure qualité des projets."        },
        projects: {
            title: "Mes Projets",
            viewOnGithub: "Voir sur GitHub",
            foodTracking: {
                title: "Food Tracking DE/ML",
                description: "• Collecte de données via API et stockage sur AWS S3\n• ETL avec Python/DuckDB pour le traitement des données\n• Orchestration des pipelines avec Apache Airflow\n• CI/CD avec GitHub Actions et déploiement automatisé\n• Containerisation avec Docker pour la portabilité\n• Analyse ML : clustering, recommandation et détection d'anomalies\n• Interface Streamlit pour visualisation et monitoring"
            },
            sensorApi: {
                title: "Sensor API Generator",
                description: "• Ce projet permet de générer de la fausse données pour le projet Food Tracking DE/ML et de la transmettre par API\n• API FastAPI pour la génération de données IoT\n• Containerisation Docker et déploiement cloud\n• Documentation OpenAPI et tests automatisés\n• Simulation en temps réel d'environnements IoT\n• Interface REST pour la configuration des capteurs\n• Monitoring des performances et des métriques"
            },
            aiFood: {
                title: "AI Food & Activity Tracker",
                description: "• Application SaaS complète de suivi alimentaire et d'activité physique\n• Assistant IA intégré (Mixtral-8x7B fine-tuné avec QLoRA)\n• Backend FastAPI avec PostgreSQL sur AWS RDS\n• Frontend React avec interface conversationnelle\n• Recherche de produits via AWS S3 (base OpenFoodFacts)\n• CI/CD avec GitHub Actions et déploiement Docker\n• Architecture cloud complète (AWS S3, RDS, Render)"
            },
            offDatabase: {
                title: "OpenFoodFacts Database Creator",
                description: "• Scraping de la base OpenFoodFacts\n• Classification automatique des codes-barres (EAN-8/13)\n• Extraction détaillée des données nutritionnelles\n• Gestion des erreurs et validation des données\n• Upload automatisé vers AWS S3\n• Système de reprise sur erreur et checkpoints\n• Base de données utilisée par AI Food & Activity Tracker"
            }
        },
        skills: {
            title: "Compétences"
        },
        experience: {
            title: "Expériences & Études",
            education: {
                title: "Formation",
                items: [
                    {
                        period: "2023 - 2025",
                        title: "Master Data Science",
                        institution: "DSTI",
                        description: "Spécialisation en Data Engineering et Machine Learning"
                    },
                    {
                        period: "2018 - 2021",
                        title: "Diplôme d'Ingénieur - Filière SINERGIE",
                        institution: "ENSEM Nancy",
                        description: "Spécialisation en Systèmes Numériques et Génie Industriel"
                    },
                    {
                        period: "2016 - 2018",
                        title: "Classes Préparatoires PCSI/PSI",
                        institution: "Saint Stanislas, Nantes"
                    }
                ]
            },
            professional: {
                title: "Expériences Professionnelles",
                items: [
                    {
                        period: "2023 - 2025",
                        title: "Data Engineer en Alternance",
                        company: "Thales Alenia Space, Cannes",
                        description: "• Conception de pipelines ETL pour exploiter les données de tests SADM (Solar Array Drive Mechanisms) et SA (Solar Arrays)\n• Optimisation des traitements : concaténation de tables, moyennes mobiles, application de seuils techniques\n• Amélioration de la qualité des données via NLP, algorithmes de similarité et Regex pour détecter et corriger les erreurs de saisie\n• Développement d'une interface avec FastAPI pour automatiser l'envoi vers Dataiku et l'exécution des scripts batch\n• Intégration automatique des CSV dans Power BI via l'API Dataiku pour une visualisation fluide\n• Réduction drastique du temps de traitement (de plusieurs jours à quelques heures) grâce à l'automatisation complète du pipeline"
                    },
                    {
                        period: "2022",
                        title: "Ingénieur d'études des programmes de maintenance",
                        company: "EDF Cap Ampère, Saint-Denis",
                        description: "• Supervision des Programmes de Maintenance Préventive (PBMP) et des contrôles techniques (ASG, SEC, LHP-LHQ, assemblages boulonnés)\n• Exploitation des données historiques via requêtes SQL\n• Analyse des inspections et reporting des tendances sous Power BI pour optimiser la planification des interventions"
                    },
                    {
                        period: "2021",
                        title: "Stage Ingénieur",
                        company: "EDF CNPE de Chinon",
                        description: "• Optimisation des programmes de maintenance\n• Analyse des données de maintenance préventive\n"
                    }
                ]
            }
        },
        contact: {
            title: "Contact",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            experience: "Experience & Education",
            contact: "Contact",
            resumeFr: "Resume FR",
            resumeEn: "Resume EN"
        },
        home: {
            greeting: "Hello!",
            name: "Yann GUEGUEN",
            title: "Data Engineer",
            bio: "Data Engineer with a strong interest in AI, Cloud Computing and DevOps."
        },
        about: {
            title: "About",
            content: "After my engineering degree and one year of experience at EDF as an engineer on maintenance programs, I completed a specialized training in Data Engineering and Data Science through an apprenticeship at Thales Alenia Space.\n\nThis experience allowed me to master process automation and ETL pipeline development in a demanding industrial context.\n\nThrough personal and academic projects, I expanded my expertise in Cloud Computing and DevOps practices, enabling me to design comprehensive and scalable data solutions.\n\nI leverage cloud technologies to optimize resources (storage, VMs, containers) and DevOps methodologies (CI/CD, automated testing, continuous deployment) to ensure better project quality."
        },
        projects: {
            title: "My Projects",
            viewOnGithub: "View on GitHub",
            foodTracking: {
                title: "Food Tracking DE/ML",
                description: "• Data collection via API and AWS S3 storage\n• ETL with Python/DuckDB for data processing\n• Pipeline orchestration with Apache Airflow\n• CI/CD with GitHub Actions and automated deployment\n• Docker containerization for portability\n• ML analysis: clustering, recommender and anomaly detection\n• Streamlit interface for visualization and monitoring"
            },
            sensorApi: {
                title: "Sensor API Generator",
                description: "• This project allows to generate fake data for the Food Tracking DE/ML project and to send it by API\n• FastAPI API for IoT data generation\n• Docker containerization and cloud deployment\n• OpenAPI documentation and automated testing\n• Real-time IoT environment simulation\n• REST interface for sensor configuration\n• Performance and metrics monitoring"
            },
            aiFood: {
                title: "AI Food & Activity Tracker",
                description: "• Complete SaaS application for food and physical activity tracking\n• Integrated AI assistant (Mixtral-8x7B fine-tuned with QLoRA)\n• FastAPI backend with PostgreSQL on AWS RDS\n• React frontend with conversational interface\n• Product search via AWS S3 (OpenFoodFacts database)\n• CI/CD with GitHub Actions and Docker deployment\n• Full cloud architecture (AWS S3, RDS, Render)"
            },
            offDatabase: {
                title: "OpenFoodFacts Database Creator",
                description: "• Scraping of OpenFoodFacts database\n• Automatic barcode classification (EAN-8/13)\n• Detailed nutritional data extraction\n• Error handling and data validation\n• Automated upload to AWS S3\n• Error recovery and checkpoint system\n• Database used by AI Food & Activity Tracker"
            }
        },
        skills: {
            title: "Skills"
        },
        experience: {
            title: "Experience & Education",
            education: {
                title: "Education",
                items: [
                    {
                        period: "2023 - 2025",
                        title: "Master Data Science",
                        institution: "DSTI",
                        description: "Specialization in Data Engineering and Machine Learning"
                    },
                    {
                        period: "2018 - 2021",
                        title: "Engineering Degree - SINERGIE Program",
                        institution: "ENSEM Nancy",
                        description: "Specialization in Digital Systems and Industrial Engineering"
                    },
                    {
                        period: "2016 - 2018",
                        title: "Preparatory Classes PCSI/PSI",
                        institution: "Saint Stanislas, Nantes"
                    }
                ]
            },
            professional: {
                title: "Professional Experience",
                items: [
                    {
                        period: "2023 - 2025",
                        title: "Data Engineer Apprentice",
                        company: "Thales Alenia Space, Cannes",
                        description: "• Designed and deployed ETL pipelines for test data from SADM (Solar Array Drive Mechanisms) and SA (Solar Arrays)\n• Optimised data processing: table concatenation, moving average smoothing, and threshold filtering\n• Enhanced data quality using NLP, similarity algorithms, and Regex to detect and correct input errors\n• Built a FastAPI interface to automate file uploads to Dataiku and batch script execution\n• Automated CSV ingestion into Power BI using the Dataiku API for real-time dashboard updates\n• Reduced overall processing time (from several days to a few hours) through full pipeline automation"
                    },
                    {
                        period: "2022",
                        title: "Maintenance Programme Engineer",
                        company: "EDF Cap Ampère, Saint-Denis",
                        description: "• Oversaw Preventive Maintenance Programmes (PBMP) and technical inspections (ASG, SEC, LHP-LHQ, bolted assemblies)\n• Used historical data analysis with SQL queries\n• Analysed inspection data and created trend reports in Power BI to improve maintenance planning"
                    },
                    {
                        period: "2021",
                        title: "Engineering Intern",
                        company: "EDF CNPE de Chinon",
                        description: "• Optimized maintenance programs\n• Analyzed preventive maintenance data\n"
                    }
                ]
            }
        },
        contact: {
            title: "Contact",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub"
        }
    }
};
