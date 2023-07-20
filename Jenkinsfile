pipeline {
    agent any
    stages {
        stage('Clone stage') {
            steps {
                git 'https://github.com/vanhauknc/nodesample.git'
            }
        }
        stage('Build stage') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build  -t vanhauknc/nodesample'
                    sh 'docker push vanhauknc/nodesample'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy....'
                sh '''
                echo "doing Deploy stuff.."
                '''
            }
        }
    }
}
