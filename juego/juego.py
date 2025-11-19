
import random 

opciones = ["piedra", "papel", "tijeras"]

print("BIENVENIDO A PIEDRA PAPEL O TIJERAS")
print("ESCRIBE 'SALIR' PARA ABANDONAR EL JUEGO")

rondas = int(input("¿Cuántas rondas quieres jugar? 3 o 5: "))

victorias = 0
derrotas = 0
empates = 0
ultima_jugada = None  

def jugada_inteligente(jugada_jugador):
    if jugada_jugador == "piedra":
        return "papel"     
    elif jugada_jugador == "papel":
        return "tijeras"  
    elif jugada_jugador == "tijeras":
        return "piedra"    
    else:
        return random.choice(opciones)  
    
    
# Usamos un for en lugar de while para controlar las rondas
for ronda in range(1, rondas + 1):
    print(f"\n--- Ronda {ronda} de {rondas} ---")
    jugador = input("Elige piedra, papel o tijeras: ").lower()
    
    if jugador == "salir":
        break
    
    if jugador not in opciones:
        print("Opción inválida, pierdes la ronda automáticamente.")
        derrotas += 1
        continue
    if ultima_jugada:
        computadora = jugada_inteligente(ultima_jugada)
    else:
        computadora = random.choice(opciones)
    
    # Elección de la computadora
    computadora = random.choice(opciones)
    print(f"La EDE eligió: {computadora}")
    
    if jugador == computadora:
        print("¡Es un empate!")
        empates += 1
    elif (jugador == "piedra" and computadora == "tijeras") or \
        (jugador == "tijeras" and computadora == "papel") or \
        (jugador == "papel" and computadora == "piedra"):
        print("¡DIABL GANASTE!")
        victorias += 1
    else:
        print("¡WEJE PERDISTE LOQUIT@!")
        derrotas += 1 
        ultima_jugada = jugador

    print(f"Marcador → Victorias: {victorias} | Derrotas: {derrotas} | Empates: {empates}")

# Resultados finales después del bucle
print("\n--- Resultados finales ---")
print(f"Victorias: {victorias}")
print(f"Derrotas: {derrotas}")
print(f"Empates: {empates}")

if victorias > derrotas:
    print("🏆 ¡Felicidades! Ganaste la partida.")
elif derrotas > victorias:
    print("💀 Lo siento, perdiste la partida.")
else:
    print("🤝 La partida terminó en empate.")

print("-" * 30)
