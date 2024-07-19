app.controller('createProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo createProductCtrl thành công');

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

    $scope.onClickSubmit = function() {

        console.log("// Gọi hàm onClickSubmit() thành công");

        console.log("// Giá trị người dùng nhập: ", $scope.product);

        $scope.validateForm.trangThai = true;
        $scope.validateForm.noiDung = "";

        if($scope.product.id === "") {
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
            method: "POST",
            url: "http://localhost:3000/san-pham",
            data: $scope.product
        }).then(function(response) {
            alert("Tạo mới thành công");
            window.location.href = "#!/dssp";


        })




    } // Kết thúc hàm onClickSubmit()


}) // Kết thúc controller
