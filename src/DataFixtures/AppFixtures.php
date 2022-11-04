<?php

namespace App\DataFixtures;

use App\Entity\Player;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $john = new Player();
        $john->setName('John');
        $john->setAge(23);
        $john->setScore(0);

        $jane = new Player();
        $jane->setName('Mary');
        $jane->setAge(24);
        $jane->setScore(0);

        $manager->persist($john);
        $manager->persist($jane);

        $manager->flush();
    }
}
