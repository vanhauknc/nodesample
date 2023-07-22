pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')
        SSH_KEY = credentials('ssh-agent')
        REMOTE_SERVER = '18.142.90.126'
        REMOTE_USER = 'ubuntu'
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

        stage('Remote SSH Command') {
            steps {
                sshagent(credentials: ['ssh-agent']) {
                    script {
                        def remoteCommand = '''
                            cd /home/ubuntu/nodesample
                            docker compose down
                            docker pull vanhauknc/nodesample
                            docker compose up -d
                            docker image prune -f
                            docker volume prune -f
                            '''
                        sh "ssh -o StrictHostKeyChecking=no -i \"$SSH_KEY\" ${REMOTE_USER}@${REMOTE_SERVER} '${remoteCommand}'"
                    }
                }
            }
        }
    }
      post {
        always {
          sh 'docker logout'
        }
      }
}
