# Django Gramm

Django Gramm is a Django application that provides user registration and login functionalities. Users can register using their email or log in via services like Google or GitHub. Once logged in, users can create their profiles, make posts, view other users' posts, and like them.

## Features

- **User Registration**: Users can sign up using their email address. Account creation requires email confirmation for verification.
- **Third-Party Authentication**: Users have the option to log in using their Google or GitHub accounts.
- **User Profiles**: Users can create personalized profiles, providing information about themselves.
- **Post Creation**: Users are able to create their own posts, sharing content with the community.
- **Post Interaction**: Users can engage with posts created by others, including liking them to show appreciation or agreement.
- **Follow/Unfollow**: Users can choose to follow or unfollow other users, enabling them to stay updated on their activities or posts.

### Installation Steps ###

1. Clone the repository to your local machine:
   git clone https://github.com/MacMicroSoft/DjangoGramm.git

2. Create a virtual environment:
   - For Windows:
     python -m venv venv
   - For Linux/macOS:
     python3 -m venv venv

3. Activate the virtual environment:
   - For Windows:
     venv\Scripts\activate
   - For Linux/macOS:
     source venv/bin/activate

4. Install the required dependencies:
   pip install -r requirements.txt

5. Create a .env file


### Environment Configuration ###

```plaintext
# Set your Django secret key
SECRET_KEY = your_secret_key

# Enable or disable debugging
DEBUG = True

# Database Configuration
DB_ENGINE = django.db.backends.postgresql
DB_NAME = your_database_name
DB_USER = your_database_user
DB_PASSWORD = your_database_password
DB_HOST = your_database_host
DB_PORT = your_database_port

# Test Database Configuration
TEST_DB_NAME = your_test_database_name

# Email Configuration
EMAIL_BACKEND = django.core.mail.backends.smtp.EmailBackend
EMAIL_USE_TLS = True
EMAIL_HOST = your_email_host
EMAIL_HOST_USER = your_email_host_user
EMAIL_HOST_PASSWORD = your_email_host_password
EMAIL_PORT = your_email_port

# Google OAuth2 Configuration
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = your_google_oauth2_key
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = your_google_oauth2_secret

# GitHub Configuration
SOCIAL_AUTH_GITHUB_KEY = your_github_key
SOCIAL_AUTH_GITHUB_SECRET = your_github_secret

# AWS S3 Configuration
AWS_ACCESS_KEY_ID = your_aws_access_key_id
AWS_SECRET_ACCESS_KEY = your_aws_secret_access_key
AWS_STORAGE_BUCKET_NAME = your_storage_bucket_name
AWS_S3_SIGNATURE_NAME = s3v4
AWS_S3_REGION_NAME = your_s3_region_name
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = public-read
AWS_S3_VERIFY = True

# Default file storage settings
DEFAULT_FILE_STORAGE = storages.backends.s3boto3.S3Boto3Storage
STATICFILES_STORAGE = storages.backends.s3boto3.S3Boto3Storage
```
### Migrate ###

After setting up your environment variables in the .env file, follow these steps to apply migrations:

- First, ensure you don't have a migrations folder:
  (Carefully check if you don't have a migrations folder; if you have it, use the second command or delete this folder)

- Run makemigrations to create migrations for changes:
  python manage.py makemigrations

- Apply migrations to your database:
  python manage.py migrate
