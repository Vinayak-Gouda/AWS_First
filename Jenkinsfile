pipeline {
    agent any

    environment {
        IMAGE_NAME = "nodeapp"
        CONTAINER_NAME = "nodeApp"
        APP_PORT = "4000"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 80:$APP_PORT --name $CONTAINER_NAME --restart unless-stopped $IMAGE_NAME:latest'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful! 🎉'
        }
        failure {
            echo 'Deployment Failed! ❌'
        }
    }
}
