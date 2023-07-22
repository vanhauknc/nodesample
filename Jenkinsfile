pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')
    }
    stages {
        stage('Clone') {
            steps {
                echo 'node --version'
            }
        }
        stage('Login docker'){
            steps {
                sh 'docker --version'
              }    
        }
        stage('Build'){
            steps{
                echo 'build done'
            }
        }
    }
}
