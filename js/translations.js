const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À Propos",
            projects: "Projets",
            skills: "Compétences",
            experience: "Expériences & Études",
            contact: "Contact"
        },
        home: {
            greeting: "Bonjour !",
            name: "Yann GUEGUEN",
            title: "Data Engineer",
            bio: "Data Engineer avec un fort intérêt pour l'IA, le Cloud Computing et le DevOps."
        },
        about: {
            title: "À Propos",
            content: "Après mon diplôme d'ingénieur et une expérience d'un an chez EDF, j'ai complété une formation spécialisée en Data Engineering et Data Science en alternance chez Thales Alenia Space.\nCette expérience m'a permis de maîtriser l'automatisation des processus et le développement de pipelines ETL dans un contexte industriel exigeant.\nÀ travers mes projets personnels et académiques, j'ai élargi mes compétences vers le Cloud Computing et les pratiques DevOps, me permettant de concevoir des solutions data complètes et scalables.\nJe m'appuie sur les technologies cloud pour optimiser les ressources (stockage, VM, conteneurs) et sur les méthodologies DevOps (CI/CD, tests automatisés, déploiement continu) pour garantir une meilleure qualité des projets."        },
        projects: {
            title: "Mes Projets",
            viewOnGithub: "Voir sur GitHub",
            foodTracking: {
                title: "Food Tracking DE/ML",
                description: "• Collecte de données via API et stockage sur AWS S3\n• ETL avec Python/DuckDB pour le traitement des données\n• Orchestration des pipelines avec Apache Airflow\n• CI/CD avec GitHub Actions et déploiement automatisé\n• Containerisation avec Docker pour la portabilité\n• Analyse ML : clustering, recommandation et détection d'anomalies\n• Interface Streamlit pour visualisation et monitoring"
            },
            sensorApi: {
                title: "Sensor API Generator",
                description: "Ce projet permet de générer de la fausse données pour le projet Food Tracking DE/ML et de la transmettre par API\n• API FastAPI pour la génération de données IoT\n• Containerisation Docker et déploiement cloud\n• Documentation OpenAPI et tests automatisés\n• Simulation en temps réel d'environnements IoT\n• Interface REST pour la configuration des capteurs\n• Monitoring des performances et des métriques"
            },
            aiFood: {
                title: "AI Food & Activity Tracker",
                description: "• Application SaaS complète de suivi alimentaire et d'activité physique\n• Assistant IA intégré (Mixtral-8x7B fine-tuné avec QLoRA)\n• Backend FastAPI avec PostgreSQL sur AWS RDS\n• Frontend React avec interface conversationnelle\n• Recherche de produits via AWS S3 (base OpenFoodFacts)\n• CI/CD avec GitHub Actions et déploiement Docker\n• Architecture cloud complète (AWS S3, RDS, Render)\n• Système de logs quotidiens personnalisés par utilisateur"
            },
            offDatabase: {
                title: "OpenFoodFacts Database Creator",
                description: "• Scraping intelligent de la base OpenFoodFacts\n• Classification automatique des codes-barres (EAN-8/13)\n• Extraction détaillée des données nutritionnelles\n• Gestion des erreurs et validation des données\n• Upload automatisé vers AWS S3\n• Système de reprise sur erreur et checkpoints\n• Base de données utilisée par AI Food & Activity Tracker"
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
                        institution: "DSTI"
                    },
                    {
                        period: "2018 - 2021",
                        title: "Diplôme d'Ingénieur - Filière SINERGIE",
                        institution: "ENSEM Nancy",
                        description: "Spécialisation en informatique et sûreté"
                    },
                    {
                        period: "2016 - 2018",
                        title: "Classes Préparatoires PCSI/PSI",
                        institution: "Saint Stanislas, Nantes"
                    }
                ]
            },
            professional: {
                title: "Expérience Professionnelle",
                items: [
                    {
                        period: "2023 - 2025",
                        title: "Data Engineer en Alternance",
                        company: "Thales Alenia Space, Cannes",
                        description: "Automatisation du traitement des données de tests"
                    },
                    {
                        period: "2022",
                        title: "Data Engineer",
                        company: "EDF Cap Ampère, Saint-Denis",
                        description: "Contrôle des programmes de maintenance dans les CNPE"
                    },
                    {
                        period: "2021",
                        title: "Stage Ingénieur",
                        company: "EDF CNPE de Chinon",
                        description: "Optimisation des programmes de maintenance"
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
            contact: "Contact"
        },
        home: {
            greeting: "Hello!",
            name: "Yann GUEGUEN",
            title: "Data Engineer",
            bio: "Data Engineer with a strong interest in AI, Cloud Computing and DevOps."
        },
        about: {
            title: "About",
            content: "After my engineering degree and one year of experience at EDF, I completed a specialized training in Data Engineering and Data Science through an apprenticeship at Thales Alenia Space.\nThis experience allowed me to master process automation and ETL pipeline development in a demanding industrial context.\nThrough personal and academic projects, I expanded my expertise in Cloud Computing and DevOps practices, enabling me to design comprehensive and scalable data solutions.\nI leverage cloud technologies to optimize resources (storage, VMs, containers) and DevOps methodologies (CI/CD, automated testing, continuous deployment) to ensure better project quality."
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
                description: "This project allows to generate fake data for the Food Tracking DE/ML project and to send it by API\n• FastAPI API for IoT data generation\n• Docker containerization and cloud deployment\n• OpenAPI documentation and automated testing\n• Real-time IoT environment simulation\n• REST interface for sensor configuration\n• Performance and metrics monitoring"
            },
            aiFood: {
                title: "AI Food & Activity Tracker",
                description: "• Complete SaaS application for food and physical activity tracking\n• Integrated AI assistant (Mixtral-8x7B fine-tuned with QLoRA)\n• FastAPI backend with PostgreSQL on AWS RDS\n• React frontend with conversational interface\n• Product search via AWS S3 (OpenFoodFacts database)\n• CI/CD with GitHub Actions and Docker deployment\n• Full cloud architecture (AWS S3, RDS, Render)\n• User-specific daily logging system"
            },
            offDatabase: {
                title: "OpenFoodFacts Database Creator",
                description: "• Smart scraping of OpenFoodFacts database\n• Automatic barcode classification (EAN-8/13)\n• Detailed nutritional data extraction\n• Error handling and data validation\n• Automated upload to AWS S3\n• Error recovery and checkpoint system\n• Database used by AI Food & Activity Tracker"
            }
        },
        skills: {
            title: "Skills",
            dataEngineering: {
                title: "Data Engineering",
                items: ["Python", "SQL", "PySpark", "Apache Airflow", "MongoDB", "Neo4j"]
            },
            dataScience: {
                title: "Data Science & AI",
                items: ["TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "Data Analysis", "Data Visualization"]
            },
            cloudBigData: {
                title: "Cloud & Big Data",
                items: ["AWS", "Databricks", "Apache Spark", "Hadoop"]
            },
            devops: {
                title: "DevOps",
                items: ["Docker", "CI/CD", "GitHub Actions", "Linux", "Shell/Bash"]
            },
            webDev: {
                title: "Web Development",
                items: ["JavaScript", "HTML", "CSS"]
            }
        },
        experience: {
            title: "Experience & Education",
            education: {
                title: "Education",
                items: [
                    {
                        period: "2023 - 2025",
                        title: "Master's in Data Science",
                        institution: "DSTI"
                    },
                    {
                        period: "2018 - 2021",
                        title: "Engineering Degree - SINERGIE Program",
                        institution: "ENSEM Nancy",
                        description: "Specialization in computer science and safety"
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
                        description: "Automation of test data processing"
                    },
                    {
                        period: "2022",
                        title: "Data Engineer",
                        company: "EDF Cap Ampère, Saint-Denis",
                        description: "Control of maintenance programs in nuclear power plants"
                    },
                    {
                        period: "2021",
                        title: "Engineering Intern",
                        company: "EDF CNPE de Chinon",
                        description: "Optimization of maintenance programs"
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
