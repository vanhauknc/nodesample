pipeline {
    agent { dockerfile true }
    stages {
        stage('Clone') {
            steps {
                sh 'node --version'
                sh 'svn --version'
                git 'https://github.com/vanhauknc/nodesample'
            }
        }
        stage('Build'){
            steps{
                sh 'docker build -t vanhauknc/nodesample:latest .'
            }
        }
    }
}
