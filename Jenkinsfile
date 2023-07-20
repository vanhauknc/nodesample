pipeline {
    agent none
    environment{
        DOCKERHUB_CREDENTIALS=credentials('docker-hub')
        DOCKER_IMAGE = "vanhauknc/nodesample"
    }
    stages {
        stage('Clone stage') {
                agent{
                    docker {
                        image 'node:18-alpine'
                    }
                }
                steps{
                    sh "npm install"
                }
            
        }
        stage('Build stage') {
            steps {
                sh 'echo build' 
            }
        }
        stage('Login') {
            steps {
				sh 'echo LOGIN  '
			}
        }
        stage('Push') {

			steps {
				sh 'echo Push'
			}
		}
    }
}
