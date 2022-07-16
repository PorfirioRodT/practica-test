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
