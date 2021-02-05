import pygame

pygame.init()

from game import Game

# generer la fenêtre du jeu
pygame.display.set_caption('Comet fall game')
screen = pygame.display.set_mode((1080, 720))

running = True

# Importer le BackGround
backgroung = pygame.image.load('assets/bg.jpg')

# charger le jeu
game = Game()

# boucle pour maintenir la fenêtre ouverte
while running:

    # appliquer l'arriere plan
    screen.blit(backgroung, (0, -200))

    # appliquer l'image du joueur
    screen.blit(game.player.image, game.player.rect)

    # verifier si les touche activer sont gauche ou droite
    if game.pressed.get(pygame.K_LEFT) and game.player.rect.x > 0:
        game.player.moveLeft()
    elif game.pressed.get(pygame.K_RIGHT) and game.player.rect.x + game.player.rect.width < screen.get_width():
        game.player.moveRight()

    # mettre a jour l'ecran
    pygame.display.flip()

    # si le joueur ferme la fenêtre
    for event in pygame.event.get():
        # verifie que l'évènement est fermeture
        if event.type == pygame.QUIT:
            running = False
            pygame.quit()

        # detecter si un joueur lache un touche du clavier
        elif event.type == pygame.KEYDOWN:
            game.pressed[event.key] = True
        elif event.type == pygame.KEYUP:
            game.pressed[event.key] = False
