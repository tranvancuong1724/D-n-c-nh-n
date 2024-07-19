app.controller('editProductCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editProductCtrl thành công');
    console.log('Log để in thử giá trị params từ url', $routeParams);

    $scope.product = {
        id: "",
        ten: "",
        anh: "",
        gia: "",
        tenDanhMuc: ""
    }
    
    $scope.validateForm = {
        trangThai: true, 
        noiDung: ""
    }

    $http({
        method: "GET",
        url: "http://localhost:3000/san-pham/" + $routeParams.id
    }).then(function (res) {
        $scope.product = res.data;

    })

    $scope.onClickSubmit = function () {
        console.log("// Gọi hàm onClickSubmit() thành công");
        console.log("// Giá trị người dùng nhập: ", $scope.product);

        $scope.validateForm.trangThai = true;
        $scope.validateForm.noiDung = "";

        if ($scope.product.id === "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "ID là trường bắt buộc";
            return;
        }

        if ($scope.product.ten === "" || $scope.product.ten.length < 5) {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "Tên là trường bắt buộc, và có tối thiểu 5 ký tự";
            return; 
        }

        if ($scope.product.anh === "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "Ảnh là trường bắt buộc";
            return; 
        }

        $http({
            method: "PUT",
            url: "http://localhost:3000/san-pham/" + $routeParams.id,
            data: $scope.product
        }).then(function (response) {

            alert("Chỉnh sửa thành công");

            window.location.href = "#!/dssp";


        })

    } // Kết thúc hàm onClickSubmit()


})
