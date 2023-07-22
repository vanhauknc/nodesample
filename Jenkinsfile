pipeline {
    agent { dockerfile true }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')
    }
    stages {
        stage('Clone') {
            steps {
                sh 'node --version'
            }
        }
        stage('Login docker'){
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
              }    
        }
        stage('Build'){
            steps{
                echo 'build done'
            }
        }
    }
}
