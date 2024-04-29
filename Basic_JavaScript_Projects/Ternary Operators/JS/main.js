function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").ariaValueMax;
    Can_ride = (Height < 52) ? "You are to short":"You are tall enough";
    document.getElementById("Vote").innerHTML = Can_ride + " to ride";
}