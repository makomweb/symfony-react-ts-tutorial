<?php

namespace App\Controller\API;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    private UserRepository $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    #[Route('/api/users', name: 'api_users_index')]
    public function index(): JsonResponse
    {
        $users = $this->repository->findAll();
        return $this->json($users, Response::HTTP_OK);
    }
}
