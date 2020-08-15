const $ = require('jquery')
// Lo declaramos globalmente
window.$ = $

$(document).ready(function () {
    function LimpiaForm() {
        $('#TxtNombre').val('');
        $('#TxtEmail').val('');
        $('#TxtDepartamento').val('');
        $('#TxtMunicipio').val('');
    }
    /////////////
    // Guardar //
    /////////////
    $('#BtnGuardar').click(function () {

        jNombre = $('#TxtNombre').val();
        jEmail = $('#TxtEmail').val();
        jDepartamento = $('#TxtDepartamento').val();
        jMunicipio = $('#TxtMunicipio').val()
        if (jDepartamento == '') {
            $('#modalguarda2').trigger('click');
            $('#TxtDepartamento').focus();
            return false;
        }
        if (jMunicipio == '') {
            $('#modalguarda3').trigger('click');
            $('#TxtMunicipio').focus();
            return false;
        }
        if (jNombre == '') {
            $('#modalguarda4').trigger('click');
            $('#TxtNombre').focus();
            return false;
        }
        if (jEmail == '') {
            $('#modalguarda5').trigger('click');
            $('#TxtEmail').focus();
            return false;
        }      

        $.ajax({
            url: 'http://localhost/Custumer.php',
            dataType: 'json',
            cache: false,
            type: 'POST',
            data: {
                jNombre: jNombre,
                jEmail: jEmail,
                jDepartamento: jDepartamento,
                jMunicipio: jMunicipio
            },
            success: function (datos) {
                $('.modalguarda1').trigger('click');
                
                LimpiaForm();
            }
        });
    });
});

