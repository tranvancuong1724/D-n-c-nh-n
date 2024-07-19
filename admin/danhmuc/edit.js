app.controller('editDanhMucCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editDanhMucCtrl thành công');

    console.log('Log để in thử giá trị params từ url', $routeParams);

    $scope.danhMuc = {
        id: "",
        ten: ""
    }

    $http({
        method: "GET",
        url: "http://localhost:3000/danh-muc/" + $routeParams.id
    }).then(function (res) {

        $scope.danhMuc = res.data;

    })

    $scope.onClickSubmit = function () {
        
        console.log("// Gọi hàm onClickSubmit() thành công");

        console.log("// Giá trị người dùng nhập: ", $scope.danhMuc);

        $http({
            method: "PUT",
            url: "http://localhost:3000/danh-muc/" + $routeParams.id,
            data: $scope.danhMuc
        }).then(function (response) {

            alert("Chỉnh sửa thành công");

            window.location.href = "#!/danhmucsp";
        })

    } // Kết thúc hàm onClickSubmit()


})
