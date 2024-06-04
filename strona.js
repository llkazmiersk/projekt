// Funkcja zmieniająca kolor tła na podstawie wyniku aktywności fizycznej
function zmienKolorTla(wynik) {
    const resultContainer = document.getElementById('resultContainer');
    switch(wynik) {
        case "Słaba Aktywność":
            resultContainer.style.backgroundColor = "#CC0000"; /* czerwony */
            break;
        case "Średnia Aktywność":
            resultContainer.style.backgroundColor = "#FF7F00"; /* pomarańczowy */
            break;
        case "Dobra Aktywność":
            resultContainer.style.backgroundColor = "#1B5E20"; /* zielony */
            break;
        default:
            resultContainer.style.backgroundColor = "#ffffff"; /* biały */
            break;
    }
}

// Funkcja obliczająca wynik aktywności fizycznej
function obliczPoziomAktywnosci() {
    // Pobierz wartości z formularza
    const exerciseFrequency = parseInt(document.getElementById('exerciseFrequency').value);
    const exerciseDuration = parseInt(document.getElementById('exerciseDuration').value);
    const dailySteps = parseInt(document.getElementById('dailySteps').value);

    // Oblicz wynik na podstawie wartości
    const wynik = (exerciseFrequency + exerciseDuration + dailySteps) / 3;

    // Wyświetl wynik na stronie
    const activityResult = document.getElementById('activityResult');
    const activityDescription = document.getElementById('activityDescription');
    const activityRecommendations = document.getElementById('activityRecommendations');

    if (wynik <= 1) {
        activityResult.textContent = "Słaba Aktywność";
        activityDescription.textContent = "Twój poziom aktywności jest niski.";
        activityRecommendations.textContent = "Zaleca się zwiększenie aktywności fizycznej, aby poprawić zdrowie i kondycję.";
    } else if (wynik <= 2) {
        activityResult.textContent = "Średnia Aktywność";
        activityDescription.textContent = "Twój poziom aktywności jest przeciętny.";
        activityRecommendations.textContent = "Zachęcamy do utrzymania lub zwiększenia aktywności fizycznej w celu poprawy kondycji.";
    } else {
        activityResult.textContent = "Dobra Aktywność";
        activityDescription.textContent = "Twój poziom aktywności jest wysoki.";
        activityRecommendations.textContent = "Gratulacje! Zachęcamy do utrzymania aktualnego poziomu aktywności.";
    }

    // Zmień kolor tła na podstawie wyniku
    zmienKolorTla(activityResult.textContent);

    // Wyświetl sekcję wyników
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block';
}

// Nasłuchuj kliknięcia przycisku "Sprawdź Poziom Aktywności"
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', obliczPoziomAktywnosci);

document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('activityForm').reset();
    document.getElementById('resultContainer').style.display = 'none';
});
