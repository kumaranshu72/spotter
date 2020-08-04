# Spotter
Spotter is backend service for tiyaka.

# Pre Setup Instruction
<ul>
  <li>Set the node and npm version to the version mentioned in package.json.</li>
  <li> Confirue the npm setting as below. </li>
  <code>
    npm config set save=true
  </code>
  </br>
  <code>
    npm config set save-exact=true
  </code>
  <li>Install `docker` and `docker-compose` </li>
</ul>

# setup project
To start the project use `docker-compose -f docker-compose.yml up --build`

# Things to add
<ul>
  <li>automated test cases</li>
  <li>mongo connection</li>
  <li>redis connection</li>
</ul>