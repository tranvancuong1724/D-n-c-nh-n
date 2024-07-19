app.controller('createDanhMucCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo createDanhMucCtrl thành công');

    $scope.danhMuc = {
        id: "",
        ten: ""
    }
    
    $scope.onClickSubmit = function() {
        
        console.log("// Gọi hàm onClickSubmit() thành công");

        console.log("// Giá trị người dùng nhập: ", $scope.danhMuc);        

        $http({
            method: "POST",
            url: "http://localhost:3000/danh-muc",
            data: $scope.danhMuc
        }).then(function(response) {

            alert("Tạo mới thành công");

            window.location.href = "#!/danhmucsp";
        })

    } // Kết thúc hàm onClickSubmit()


}) // Kết thúc controller
