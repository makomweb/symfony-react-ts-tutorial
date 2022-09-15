<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $john = new User();
        $john->setName('John Doe');
        $john->setAge(23);

        $jane = new User();
        $jane->setName('Jane Doe');
        $jane->setAge(24);

        $manager->persist($john);
        $manager->persist($jane);

        $manager->flush();
    }
}
