/* <script src="${context}/resources/js/jquery-1.12.3.min.js"></script>

    <!--Counter UP Waypoint-->
    <script src="${context}/resources/js/waypoints.min.js"></script>
    <!--Counter UP-->
    <script src="${context}/resources/js/jquery.counterup.min.js"></script>

    <script>
        //for counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    </script>

    <!--Gmaps-->
    <script src="${context}/resources/js/gmaps.min.js"></script>
    <script type="text/javascript">
        var map;
        $(document).ready(function () {
            map = new GMaps({
                el: "#map",
                lat: 23.6911078,
                lng: 90.5112799,
                zoomControl: true,
                zoomControlOpt: {
                    style: "SMALL",
                    position: "LEFT_BOTTOM"
                },
                panControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                overviewMapControl: false,
                scrollwheel: false,
            });


            map.addMarker({
                lat: 23.6911078,
                lng: 90.5112799,
                title: "Office",
                details: {
                    database_id: 42,
                    author: "Foysal"
                },
                click: function (e) {
                    if (console.log)
                        console.log(e);
                    alert("You clicked in this marker");
                },
                mouseover: function (e) {
                    if (console.log)
                        console.log(e);
                }
            });
        });
    </script>
    <!--Google Maps API-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjxvF9oTfcziZWw--3phPVx1ztAsyhXL4"></script>


    <!--Isotope-->
    <script src="${context}/resources/js/isotope/min/scripts-min.js"></script>
    <script src="${context}/resources/js/isotope/cells-by-row.js"></script>
    <script src="${context}/resources/js/isotope/isotope.pkgd.min.js"></script>
    <script src="${context}/resources/js/isotope/packery-mode.pkgd.min.js"></script>
    <script src="${context}/resources/js/isotope/scripts.js"></script>


    <!--Back To Top-->
    <script src="${context}/resources/js/backtotop.js"></script>


    <!--JQuery Click to Scroll down with Menu-->
    <script src="${context}/resources/js/jquery.localScroll.min.js"></script>
    <script src="${context}/resources/js/jquery.scrollTo.min.js"></script>
    <!--WOW With Animation-->
    <script src="${context}/resources/js/wow.min.js"></script>
    <!--WOW Activated-->
    <script>
        new WOW().init();
    </script>


    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="${context}/resources/js/bootstrap.min.js"></script>
    <!-- Custom JavaScript-->
    <script src="${context}/resources/js/main.js"></script>*/