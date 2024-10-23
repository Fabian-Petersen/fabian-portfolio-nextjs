# create key pair
resource "tls_private_key" "tf_generated_private_key" {
    algorithm = "RSA"
    rsa_bits  = 4096
}

resource "aws_key_pair" "generated_key" {
# Name of your key: Write custom name of your key
    key_name   = "tf_key_pair"
    # The public key will be generated using the reference of tls_private_key.tf_generated_private_key
    public_key = tls_private_key.tf_generated_private_key.public_key_openssh
    # Store the private key in a file : Generate and save the private key in current directory

  provisioner "local-exec" {
    command = <<-EOT
      echo "${tls_private_key.tf_generated_private_key.private_key_pem}" > tf_key_pair.pem
      chmod 400 tf_key_pair.pem
    EOT
  }
}