const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fighting = (tiger, wolf) =>{
    if (tiger.strenght >> wolf.strenght )
    {
        tiger.growl();
        return;
    }

    if (wolf.strenght >> tiger.strenght )
    {
        wolf.growl();
        return;
    }
}
const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);