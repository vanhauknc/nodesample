pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')
    }
    stages {
        stage('Build') {
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
            sh 'docker push vanhauknc/nodesample:latest'
          }
        }
  }
      post {
        always {
          sh 'docker logout'
        }
      }
}
