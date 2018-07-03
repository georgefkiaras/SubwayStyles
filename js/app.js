(function () {
    "use strict";

    var module = angular.module("subwayStylesModule", []);
    module.controller('stylesController', ['$scope', '$subwayLines', function ($scope, $subwayLines) {
        $scope.greeting = 'Hola!';
        $scope.subwayLines = $subwayLines;
    }]);  

    var subwayLines = [];
    subwayLines.push({ Line: '1', Division: 'A', Selected: false, Color: "#EE352E", Name:"Broadway - 7 Avenue Local" });
    subwayLines.push({ Line: '2', Division: 'A', Selected: false, Color: "#EE352E", Name:"7 Avenue Express"  });
    subwayLines.push({ Line: '3', Division: 'A', Selected: false, Color: "#EE352E", Name:"7 Avenue Express"  });
    subwayLines.push({ Line: '4', Division: 'A', Selected: false, Color: "#00933C", Name:"Lexington Avenue Express"  });
    subwayLines.push({ Line: '5', Division: 'A', Selected: false, Color: "#00933C", Name:"Lexington Avenue Express"  });
    subwayLines.push({ Line: '5X', Division: 'A', Selected: false, Color: "#00933C", Name:"Lexington Avenue Express"  });
    subwayLines.push({ Line: '6', Division: 'A', Selected: false, Color: "#00933C", Name:"Lexington Avenue Local"  });
    subwayLines.push({ Line: '6X', Division: 'A', Selected: false, Color: "#00933C", Name:"Lexington Avenue Express"  });
    subwayLines.push({ Line: '7', Division: 'A', Selected: false, Color: "#B933AD", Name:"Flushing Local"  });
    subwayLines.push({ Line: '7X', Division: 'A', Selected: false, Color: "#B933AD", Name:"Flushing Express"  });
    subwayLines.push({ Line: 'GS', Division: 'A', Selected: false, Color: "#808183", Query: "S 42nd", Name:"42 St Shuttle"  });
    subwayLines.push({ Line: 'A', Division: 'B', Selected: false, Color: "#0039A6", Name:"8 Avenue Express"  });
    subwayLines.push({ Line: 'C', Division: 'B', Selected: false, Color: "#0039A6", Name:"8 Avenue Local"  });
    subwayLines.push({ Line: 'E', Division: 'B', Selected: false, Color: "#0039A6", Name:"8 Avenue Local"  });
    subwayLines.push({ Line: 'B', Division: 'B', Selected: false, Color: "#FF6319", Name:"6 Avenue Express"  });
    subwayLines.push({ Line: 'D', Division: 'B', Selected: false, Color: "#FF6319", Name:"6 Avenue Express"  });
    subwayLines.push({ Line: 'F', Division: 'B', Selected: false, Color: "#FF6319", Name:"Queens Blvd Express/ 6 Av Local"  });
    subwayLines.push({ Line: 'M', Division: 'B', Selected: false, Color: "#FF6319", Name:"QNS BLVD-6th AVE/ Myrtle Local"  });
    subwayLines.push({ Line: 'N', Division: 'B', Selected: false, Color: "#FCCC0A", Name:"Broadway Local"  });
    subwayLines.push({ Line: 'Q', Division: 'B', Selected: false, Color: "#FCCC0A", Name:"Broadway Express"  });
    subwayLines.push({ Line: 'R', Division: 'B', Selected: false, Color: "#FCCC0A", Name:"Broadway Local"  });
    subwayLines.push({ Line: 'W', Division: 'B', Selected: false, Color: "#FCCC0A", Name:"Broadway Local"  });
    subwayLines.push({ Line: 'J', Division: 'B', Selected: false, Color: "#996633", Name:"Nassau St Local"  });
    subwayLines.push({ Line: 'Z', Division: 'B', Selected: false, Color: "#996633", Name:"Nassau St Express"  });
    subwayLines.push({ Line: 'H', Division: 'B', Selected: false, Color: "#808183", Query: "S Rock", Name:"Rockaway Park Shuttle"  });
    subwayLines.push({ Line: 'L', Division: 'B', Selected: false, Color: "#A7A9AC", Name:"14 St-Canarsie Local"  });
    subwayLines.push({ Line: 'G', Division: 'B', Selected: false, Color: "#6CBE45", Name:"Brooklyn-Queens Crosstown"  });
    subwayLines.push({ Line: 'FS', Division: 'B', Selected: false, Color: "#808183", Query: "S Fkln", Name:"Franklin Avenue Shuttle"  });
    subwayLines.push({ Line: 'T', Division: 'B', Selected: false, Color: "#00ADD0", Name:"Second Avenue Local"  });
    subwayLines.push({ Line: 'SI', Division: 'B', Selected: false, Color: "#1E3491", Name:"Staten Island Railway"  });
    module.value("$subwayLines", subwayLines);


}());