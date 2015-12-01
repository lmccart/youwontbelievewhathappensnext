<?php
echo system('git reset --hard');
echo system('git checkout -- .');
echo system('git pull origin master');
?>
