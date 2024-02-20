---
title: "\U0001F4D3 3.7.0.2 Git with Collaborators: Setup"
id: 3702-git-with-collaborators-setup
slug: 3702-git-with-collaborators-setup
hide_table_of_contents: true
sidebar_position: 2
day: weekend
type: lesson
url: https://github.com/fidgetech/c-and-net/blob/main/git_with_collaborators_setup.md
---

Working in a team rather than alone can allow you to build more advanced projects, but it can be a little tricky to divide up the work and make sure that no one is overwriting anyone else's code unintentionally. We have used Git to backup our work and save our changes as we go, but it is also a powerful tool for working in a group.  

To determine the best workflow for team development, a few decisions have to be made regarding the roles of team members. On GitHub, developers contributing to the project can be owners, collaborators or contributors. In this lesson, we detail how a team member's role will determine the workflow for team development. 

## Remote Repository Ownership
---

One of the first decisions a team will need to make is to determine who will own the GitHub remote repository. Every project should have one main repository that is created with a single GitHub account. If there is a logical owner or team leader for the project, it makes sense that the main repository is created with their account. If not, the team should determine who will create the main and therefore be the owner. 

The owner will have the following privileges for the repository:

* add and remove collaborators
* change the visibility of the repository (public vs private)
* delete the repository
* implement all collaborator privileges

Once an owner is determined, other developers can work on the code as either collaborators or contributors.  

## Collaborators
---

Collaborators are members of the core development team and are officially designated as collaborators by the owner. When working in teams at Epicodus, team members are collaborators.

Collaborators have the following privileges for the repository:

* push to (write) and pull from (read) the main repository
* manage issues
* merge and close pull requests (code from contributors)
* remove themselves as collaborators

They will use a [branching and merging] workflow when they add and modify code for the project.

To assign a person as a collaborator, the owner will need to follow these steps:

1. Go to the `Settings` menu on the right side of the main repository (see in red box below).
![GitHub repo settings](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-with-teams/git-june-2020/click-on-settings-tab.png)

2. Go to `Manage Access` on the left side menu:

![Manage Access is in left-hand menu](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-with-teams/git-june-2020/click-manage-access.png)

3. Click on `Invite Teams or People`: 

![Click "Invite Teams or People"](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-with-teams/git-june-2020/click-invite-teams-or-people.png)

4. Add a team member by GitHub username, full name or email in the Collaborators form. GitHub will helpfully offer to autopopulate, but be careful! It's easy to give a random account access otherwise.

![Add the team member you want to add.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-with-teams/git-june-2020/add-gh-username-or-email.png)

5. Click `Select a team or member above` to add the GitHub user to the project. At that point, the GitHub user will be sent a confirmation email. Once they have confirmed, they will be added to the project.

6. You may optionally update a user's role in the `Manage Access` pane. If you want to be very careful about access, you'd give `Read` access, which allows contributors to create and comment on issues and also create pull requests. For group projects, it's more likely that you will give `Write` or `Admin` access. `Write` access will allow contributors to make direct changes to the repository, including pushing to the repository and managing issues. `Admin` access allows additional functionality such as adding collaborators and updating repository settings.

## Contributors
---

Anyone can be a contributor on an open source repository. Contributors are interested developers that want to offer code but can NOT make commits directly to the main repository.  The workflow of a contributor uses [forking and pulling] to submit their code for review (pull request) to the core development team.  The core team can then determine whether to merge the code with the main or not.
