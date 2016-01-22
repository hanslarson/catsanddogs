## Git Exercises:

#### Part 1-Review:
 
1. Clone repo https://github.com/alexandraestrada/git101 

2. Initialize local and remote repo for this project called gitPractice.

3. Oh look! some of the cats are making very peculiar noises! Let’s fix that. 1 volunteer to change Mr Grumpy’s ruff ruff text to a cat noise and push it back up to your repo.

4. Looks like there is a dog.js file as well with some dogs in there! Make sure you add the dog.js script tag and the appropriate div container with the class=”animalSection” and id=‘dogs’. Commit and push your changes.




#### Part 2-Branching: 

1. iss01: Milo the cat is still making a cow sound. cat.js needs to be updated so Milo is making an appropriate sound. Please create new branch called ‘iss01’ and fix this. Commit your change and push to your branch. 

2. iss02: Chiquita banana thinks she’s a dog. She needs to be reminded of her rat-like heritage. Somebody please go change her  sound property to ‘squeek squeek’ under the branch name ‘iss02’. Commit your change and push to your branch. 

3. feat01: Now that we have dogs and cats, it’s only natural we have hamsters too! This ‘feat01’ branch will be adding some hamsters into the mix. Please modify hampster.js (hint: you can copy/paste from dog.js or cat.js) and change image urls (find some fun hampster pics online). Commit your change and push to your branch.

4. feat02: Once hampster.js is added, we also need to edit index.html to contain a hampster div container for the UI layer. Please add this using branch ‘feat02’. Commit your change and push to your branch.

#### Part-3 Merging:


1. merge iss01 & iss02 into master: What kind of merge happend?

2. add reptile.js to to master branch and commit. Then, pull in feat01. What kind of merge happend?

4. Create merge conflict and Resolve.

    * Add reptile container div to index.html on master branch.      
    * Try and merge feat02 with master. 
    * settle all conflicts.


#### Part-4 Rebasing:

1. Create a new branch 'feat-rebase'.
2. Make a change in your index.html  (ex. add name of page to your title tag)
3. Commit this change.
4. Switch back to your master branch.
5. Add 'fluffy' to your catArray in cat.js, then commit this change.
6. Now switch back to your feat-rebase branch.
7. Rebase your branch with the upstream changes in master
  `$ git rebase master`
8. There should be no conflict to resolve.  Check your git log `$ git log`.  Your local commit should be at top of heap.

#### Part-5: Cherry Pick and Reset:
1. Go to your local branch.
2. Create at least three new commits.
3. Switch back to master and try cherry-picking one of the commits.
  `$ git cherry-pick <commit id> `
4. check your git log and git status.
5. Let's try reseting to previous commit (not the one with cherry-pick).

