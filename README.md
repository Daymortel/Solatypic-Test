# <p>Test pour mon admission à Solatypic</p>

## <h2>Mes routes</h2>

### <h3>Les tâches</h3>

<p><b>Afficher toutes les tâches:</b> http://localhost:3000/tasks - <b>méthode GET</b></p>
<p><b>Afficher la tâche avec l'id "1":</b> http://localhost:3000/tasks/1 - <b>méthode GET</b></p>
<p><b>Créer une tâche:</b> http://localhost:3000/tasks - <b>méthode POST</b></p>
<p><b>Modifier la tâche avec l'id "1":</b> http://localhost:3000/tasks/1 - <b>méthode PUT</b></p>
<p><b>Supprimer la tâche avec l'id "1":</b> http://localhost:3000/tasks/1 - <b>méthode DELETE</b></p>

### <h3>Les profils</h3>

<p><b>Créer un profil:</b> http://localhost:3000/users - <b>méthode POST</b></p>
<p><b>Se connecter:</b> http://localhost:3000/users/login - <b>méthode POST</b></p>

## <h2>Les paramètres</h2>

### <h3>Les tâches</h3>

#### <h4>Le header pour tes les routes concernant les tâches</h4>
<p><b>Token:</b><br />key: token <br />value: valeur du token lors de la connexion</p>

#### <h4>Le body pour la création et la modifications de tâches</h4>
<p><b>Titre:</b><br />key: title <br />value: titre de la tâche</p>
<p><b>Description:</b><br />key: description <br />value: description de la tâche</p>
<p><b>Status:</b><br />key: status <br />value: status de la tâche (ex: à faire, fini)</p>

### <h3>Les profils</h3>

<p>Pas besoin de header</p>

#### <h4>Le body</h4>
<p><b>Nom d'utilisateur:</b><br />key: username <br />value: nom d'utilisateur du profil</p>
<p><b>Mot de passe:</b><br />key: password <br />value: mot de passe du profil</p>

## <h2>Les résultats attendus</h2>

### <h3>Les tâches<h3>

<p><b>Afficher toutes les tâches:</b> tableau comprenant des objet contenant l'id, le titre, la description, la date de création et le status de chaque tâches créées</p>
<p><b>Afficher la tâche avec l'id "1":</b> tableau comprenant un objet contenant l'id, le titre, la description, la date de création et le status de la tâche avec l'id "1"</p>
<p><b>Créer une tâche:</b> message disant ""titre" a été créé"</p>
<p><b>Modifier la tâche avec l'id "1":</b> message disant ""titre" a été modifié"</p>
<p><b>Supprimer la tâche avec l'id "1":</b> message disant "Tâche supprimée"</p>

### <h3>Les profils</h3>

<p><b>Créer un profil:</b> message disant ""username" a été créé"</p>
<p><b>Se connecter:</b> objet contenant le token a utiliser pour le header pour les tâches (voir plus haut)</p>
