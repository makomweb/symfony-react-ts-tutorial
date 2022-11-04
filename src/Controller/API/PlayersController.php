<?php

namespace App\Controller\API;

use App\Entity\Player;
use App\Repository\PlayersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PlayersController extends AbstractController
{
    private PlayersRepository $repository;

    public function __construct(PlayersRepository $repository)
    {
        $this->repository = $repository;
    }

    #[Route('/api/players', name: 'api_players_index')]
    public function index(): JsonResponse
    {
        $users = $this->repository->findAll();
        return $this->json($users, Response::HTTP_OK);
    }

    #[Route('/api/players/{id}/score', name: 'api_players_score', methods: 'PATCH')]
    public function score(Player $player): JsonResponse
    {
        $player->score();
        $this->repository->save($player);
        return $this->json($player, Response::HTTP_OK);
    }

    #[Route('/api/players/scores', name: 'api_players_reset_scores', methods: 'DELETE')]
    public function reset(): JsonResponse
    {
        $players = $this->repository->findAll();

        foreach ($players as $player) {
            $player->setScore(0);
        }

        $this->repository->savePlayers($players);

        return $this->json($players, Response::HTTP_OK);
    }
}
