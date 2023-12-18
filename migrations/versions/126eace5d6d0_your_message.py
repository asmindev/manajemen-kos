"""your message

Revision ID: 126eace5d6d0
Revises: 
Create Date: 2023-12-17 12:06:29.095923

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '126eace5d6d0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('property',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('room_number', sa.String(length=100), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('status', sa.String(length=25), nullable=True),
    sa.Column('image_url', sa.Text(), nullable=True),
    sa.Column('facilities', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('property')
    # ### end Alembic commands ###