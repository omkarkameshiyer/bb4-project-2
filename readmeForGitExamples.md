git remote add origin https://github.com/omkarkameshiyer/TeamBB4Project.git

git remote

git pull origin

git status

git pull origin master

git branch elise/branching_exercise

git checkout elise/branching_exercise

nano elise.txt

git add .

git commit -m "edits"

git push origin

git push origin elise/branching_exercise

=============

Find all branches

git branch -a

=========== omkars-MacBook-Air:TEAM_PROJECT omkariyer$ git branch -a elise/branching_exercise

master remotes/origin/HEAD -> origin/master remotes/origin/elise/branching_exercise remotes/origin/huy/branch_excercise remotes/origin/master remotes/origin/soyoung/branching_exercise
omkars-MacBook-Air:TEAM_PROJECT omkariyer$ git checkout huy/branch_excercise Branch 'huy/branch_excercise' set up to track remote branch 'huy/branch_excercise' from 'origin'. Switched to a new branch 'huy/branch_excercise' omkars-MacBook-Air:TEAM_PROJECT omkariyer$ ls data_exploration.py	huy.txt

omkars-MacBook-Air:TEAM_PROJECT omkariyer$ git checkout soyoung/branching_exercise Branch 'soyoung/branching_exercise' set up to track remote branch 'soyoung/branching_exercise' from 'origin'. Switched to a new branch 'soyoung/branching_exercise'

omkars-MacBook-Air:TEAM_PROJECT omkariyer$ ls data_exploration.py	soyoung.txt

omkars-MacBook-Air:TEAM_PROJECT omkariyer$ git checkout master Switched to branch 'master' Your branch is up to date with 'origin/master'.

======= IF you want to reset a file follow these steps =====

git checkout filename git checkout -- filename


