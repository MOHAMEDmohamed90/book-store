pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin/node'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/mohamed-jilani/book-store.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test -- --coverage'
            }
        }
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Install Firebase CLI') {
            steps {
                sh 'npm install -g firebase-tools'  // Installe Firebase CLI globalement
            }
        }
        stage('Deploy to Firebase') {
            steps {
                sh 'firebase deploy --token $FIREBASE_AUTH_TOKEN'  // Assurez-vous que le token est configuré comme variable d'environnement
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
