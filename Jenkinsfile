pipeline {
    agent any
    environment{
        DOCKERHUB_CREDENTIALS=credentials('docker-hub')
    }
    stages {
        stage('Clone stage') {
            steps {
                git 'https://github.com/vanhauknc/nodesample.git'
            }
        }
        stage('Build stage') {
            steps {
                sh 'docker build -t vanhauknc/nodesample:latest .' 
            }
        }
        stage('Login') {
            steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
        }
        stage('Push') {

			steps {
				sh 'docker push -t vanhauknc/nodesample:latest'
			}
		}
    }
}
