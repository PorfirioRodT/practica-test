# Branching Strategics

The branch strategy that we use in our project is based on The GitHub Flow Branching Strategy in which there are 2 main branches: "main" and "develop". In the main we will have the code that will be released for the deployment, while the develop branch is where the pre-production codes will be sent.

Similarly, we have other branches to add features that do not interfere with these and for each use case and will start with the name of “feature/<FeatureName>”.

Take into account that there are other test branches since the repository was used for didactic methods.

# Semantic Versioning

Our project uses a versioning system called **Semantic Versioning (SemVer)** which has been the most widely used in recent years. It's a method for software developers to quickly convey vital information about software releases to the users. Semver is represented by just three numbers separated by periods (X.Y.Z):

- **X** stands for **Mayor Version**. The leftmost number denotes a major version. You have made "breaking" changes when you modify the public API and the modified code is no longer backwards compatible. This could indicate that a feature has been eliminated or that functionality has changed and that the update requires the user to modify the code.

- **Y** stands for **Minor Version**. A minor release is used to indicate the addition of features but otherwise backward compatibility of the code.

- **Z** stands for a **Patch Version**. Versions for patches are used for bug fixes. When a revision of the code is released as a patch, it means that the new features and APIs have not been added to the code, and that the revision is backward-compatible with the prior one. The most common usage is to denote a problem repair. The use of the code has not changed, which is the most crucial fact to understand.

# Pipeline Description

Our project workflow consists of three main jobs. Dev, Stage and Prod. The workflow of each job consists of the following:

**Set up job:**
This stage consists of downloading and configuring the job necessary environment configuration to start working on the next stage.

First, it downloads the operating system Ubuntu version 20.04.4 LTS. The next step is to get the permission to the github repository, prepare the workflow directory, prepare all required actions, download the repository action, and download the heroku docker images.

After the set up job finish, it's time to take some actions

**Run actions/checkout@v3:**
This task consists of downloading the branch that is being built, adding a repository directory to the temporary git global config. It initializes the repository, sets up the auth, fetches the repository being built and builds the images.

**Run gonuit/heroku-docker-deploy:**
This stage of the job consists of making an instance of the heroku image to a docker container and pushing the repository container to the heroku registry and releasing the container. This allows us to make automatic deployment to the heroku sistem.

**Post Run actions/checkout:**
In this stage it's time to make some git config on the container that has been pushed in the previous stage, and also starts the post job cleanup.

**Complete Job:**
This is the final stage, it consists of cleaning up orphan processes. This includes bash and node process termination.
