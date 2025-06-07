import { queueMove } from "./components/Player";

document.getElementById("forward")
?.addEventListener("click", () => queueMove("forward"));

document.getElementById("backward")
?.addEventListener("click", () => queueMove("backward"));

document.getElementById("left")
?.addEventListener("click", () => queueMove("left"));

document.getElementById("right")
?.addEventListener("click", () => queueMove("right"));

function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
        event.preventDefault();
        queueMove("forward");
    } else if (event.key === "ArrowDown") {
        event.preventDefault();
        queueMove("backward");
    } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        queueMove("left");
    } else if (event.key === "ArrowRight") {
        event.preventDefault();
        queueMove("right");
    }
}

export function disableControls() {
    // Remove event listeners for keyboard and button controls
    window.removeEventListener("keydown", handleKeyDown);
    document.getElementById("forward")?.removeEventListener("click", () => queueMove("forward"));
    document.getElementById("backward")?.removeEventListener("click", () => queueMove("backward"));
    document.getElementById("left")?.removeEventListener("click", () => queueMove("left"));
    document.getElementById("right")?.removeEventListener("click", () => queueMove("right"));
}

export function enableControls() {
    window.addEventListener("keydown", handleKeyDown);
    document.getElementById("forward")
        ?.addEventListener("click", () => queueMove("forward"));
    document.getElementById("backward")
        ?.addEventListener("click", () => queueMove("backward"));
    document.getElementById("left")
        ?.addEventListener("click", () => queueMove("left"));
    document.getElementById("right")
        ?.addEventListener("click", () => queueMove("right"));
}