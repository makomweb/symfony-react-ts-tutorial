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

        $mary = new Player();
        $mary->setName('Mary');
        $mary->setAge(24);
        $mary->setScore(0);

        $manager->persist($john);
        $manager->persist($mary);

        $manager->flush();
    }
}
