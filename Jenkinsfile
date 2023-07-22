pipeline {
    agent { dockerfile true }
    stages {
        stage('Clone') {
            steps {
                sh 'node --version'
            }
        }
        stage('Build'){
            steps{
                docker images
            }
        }
    }
}
