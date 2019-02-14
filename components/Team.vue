<template>
  <div class="team">
    <h2>Team</h2>
    <div class="member">
        <img src="https://avatars3.githubusercontent.com/u/1661325?s=120&v=4" />
        <h3 class="name">@keita_kawamoto</h3>
        <p class="role">Designer</p>
    </div>
    <div class="member">
        <img src="https://avatars3.githubusercontent.com/u/72049?s=120&v=4" />
        <h3 class="name">@linyows</h3>
        <p class="role">Organizer, Designer</p>
    </div>
    <div class="member">
        <img src="https://avatars3.githubusercontent.com/u/1845486?s=120&v=4" />
        <h3 class="name">@monochromegane</h3>
        <p class="role">Organizer</p>
    </div>
    <div class="member">
        <img src="https://avatars3.githubusercontent.com/u/796820?s=120&v=4" />
        <h3 class="name">@tenntenn</h3>
        <p class="role">Organizer</p>
    </div>
    <div class="member">
        <img src="https://avatars3.githubusercontent.com/u/145104?s=120&v=4" />
        <h3 class="name">@ymotongpoo</h3>
        <p class="role">Organizer</p>
    </div>
    <div class="member">
        <img src="https://avatars3.githubusercontent.com/u/2609671?s=120&v=4" />
        <h3 class="name">@yuji-otani</h3>
        <p class="role">Organizer</p>
    </div>
  </div>
</template>

<style scoped>
.team {
  display: flow-root;
}
.member {
  float: left;
  width: 270px;
  height: 100px;
}
.member img {
  display: inline-block;
  border-radius: 50%;
  padding: 0.2em;
  background-color: #fff;
  width: 30%;
  display: block;
  float: left;
  margin-right: 1em;
}
.name {
  letter-spacing: -.05em;
  font-size: .8em;
}
.role {
  letter-spacing: -.05em;
  font-size: 1em;
  text-align: left;
}
</style>
