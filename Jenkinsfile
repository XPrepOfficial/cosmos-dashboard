pipeline {
  agent any
  environment {
      GCP_PROJECT_ID = "cp-stg-webapps-whtlbl-060921"
      GCP_ZONE = "asia-south1"
      GKE_CLUSTER_NAME = "stg-webapps-whtlbl-gke-as-sth1-cluster1"
      TAG = "cosmos-dashboard-staging-${BUILD_NUMBER}"
  }
  stages {
         stage('Echo'){
            steps {
                sh "echo branceeeee - '${Branchname}'"
                sh "echo domain -- '${domain}'"
                sh "echo envveeeeee ${deployment}"
            }
        }
      
        stage('Download Env'){
            steps {
                sh "gsutil cp gs://ecosystem-configs/eks/dev/chat/api/env.sh ."            
                //sh "echo '${Branchname}'"
            }
        }
        stage('clone'){
            steps {
                   git branch: '${Branchname}', credentialsId: 'cp-web-account',poll: false, url: 'https://github.com/XPrepOfficial/cosmos-dashboard.git'
                
            }
        }
        stage('NPM install and Build'){
            steps {  
              sh "./${deployment}_deploy_jenkins.sh"            
            }
        }
        stage('build docker image'){
            steps {
                sh "docker build --build-arg ENVIRONMENT=${deployment} . -t asia.gcr.io/cp-stg-devops-pipelines-060921/stage/cosmos-dashboard-staging:${TAG}"
                }
            }
        stage('push docker image'){
             steps {
                 sh "docker push asia.gcr.io/cp-stg-devops-pipelines-060921/stage/cosmos-dashboard-staging:${TAG}"
                 }
             }
        stage('Generate kubernetes context '){
             steps {
                 sh "gcloud container clusters get-credentials ${GKE_CLUSTER_NAME} --region ${GCP_ZONE} --project ${GCP_PROJECT_ID}"
                 }
            }
        stage('Deploy on GKE'){
            steps {
                sh "kubectl set image deployment/cosmos-dashboard-staging ${domain}=asia.gcr.io/cp-stg-devops-pipelines-060921/stage/cosmos-dashboard-staging:${TAG} -n cp-stage-web"
                }
            
        }
        stage('PostDeploy'){
            steps {
                sh "echo '${TAG} Success'"
            }
        }
            
    }
}
